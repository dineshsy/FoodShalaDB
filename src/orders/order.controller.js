import express from "express";
const router = express.Router();

const orderService = require("./order.service");

// routes
router.post("/addOrder", addOrder);
router.put("/:id", update);
router.get("/:id/:userType", getByUser);

module.exports = router;

function addOrder(req, res, next) {
    orderService
        .create(req.body)
        .then((order) => res.json(order))
        .catch((err) => next(err));
}

function update(req, res, next) {
    orderService
        .update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch((err) => next(err));
}

function getByUser(req, res, next) {
    if (req.params.userType === "Customer") {
        orderService
            .getUserOrder(req.params.id)
            .then((order) => res.json(order))
            .catch((err) => next(err));
    } else if (req.params.userType === "Restaurant") {

        orderService
            .getRestaurantOrder(req.params.id)
            .then((order) => res.json(order))
            .catch((err) => next(err));
    } else {
        res.send({ message: "Provide the usertype" });
    }
}
