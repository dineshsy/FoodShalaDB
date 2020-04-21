const db = require("../_helpers/db");
const Order = db.Order;

module.exports = {
    getUserOrder,
    getRestaurantOrder,
    create,
    update
};

async function getUserOrder(userParam) {
    return await Order.find({ userId: userParam}).select("-hash");
}
async function getRestaurantOrder(userParam) {
    return await Order.find({ restaurantId: userParam}).select("-hash");
}

async function create(userParam) {
    const order = new Order(userParam);

    // save user
    await order.save();

    return order;
}

async function update(id, userParam) {
    const order = await Order.findById(id);

    // validate
    if (!order) throw "Order not found";

    // copy userParam properties to user
    Object.assign(order, userParam);

    await order.save();
}
