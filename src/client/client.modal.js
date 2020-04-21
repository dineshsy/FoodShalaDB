const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    accountType: { type: String, required: true },
    restaurantName: {type: String, required: true},
    cusines: {type: Array, required: true},
    createdDate: { type: Date, default: Date.now },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Client", schema);