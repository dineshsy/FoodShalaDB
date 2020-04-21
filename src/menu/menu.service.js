const db = require("../_helpers/db");
const Menu = db.Menu;


module.exports = {
    getAll,
    create,
    update,
    delete: _delete,
    getByRestaurant
};

async function getAll() {
    return await Menu.find().select("-hash");
}


export async function getByRestaurant(userParam) {
    return await Menu.find({restaurantId: userParam})
}

async function create(userParam) {

    const menu = new Menu(userParam);

    // save user
    await menu.save();

    return menu;
}

async function update(id, userParam) {
    const menu = await Menu.findById(id);

    // validate
    if (!menu) throw "Menu not found";


    // copy userParam properties to user
    Object.assign(menu, userParam);

    await menu.save();
}


async function _delete(id) {
    await Menu.findByIdAndRemove(id);
}