const config = require("../config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../_helpers/db");
const Client = db.Client;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

async function authenticate({ username, password }) {
    const client = await Client.findOne({ username });
    if (client && bcrypt.compareSync(password, client.hash)) {
        const { hash, ...userWithoutHash } = client.toObject();
        const token = jwt.sign({ sub: client.id }, config.secret);
        return {
            ...userWithoutHash,
            token,
        };
    }
}

async function getAll() {
    return await Client.find().select("-hash");
}

async function getById(id) {
    return await Client.findById(id).select("-hash");
}

async function create(userParam) {
    // validate
    
    if (await Client.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const client = new Client(userParam);

    // hash password
    if (userParam.password) {
        client.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save client
    await client.save();
    return client
}

async function update(id, userParam) {
    const user = await Client.findById(id);

    // validate
    if (!user) throw "Client not found";
    if (
        user.username !== userParam.username &&
        (await Client.findOne({ username: userParam.username }))
    ) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}

async function _delete(id) {
    await Client.findByIdAndRemove(id);
}
