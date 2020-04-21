const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    restaurantId: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
    products: { type: Object, required: true },
    status: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Order", schema);
