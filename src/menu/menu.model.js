const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    itemDescription: { type: String, required: true },
    mealType: { type: String, required: true },
    restaurantId: { type: String, required: true },
    price: {type: Number, required: true},
    createdDate: { type: Date, default: Date.now },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Menu", schema);
