const express = require("express");
const router = express.Router();
const clientService = require("./client.service");

// routes
router.post("/authenticate", authenticate);
router.post("/register", register);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function authenticate(req, res, next) {
    clientService
        .authenticate(req.body)
        .then((user) => {
            user
                ? res.json(user)
                : res
                      .status(400)
                      .res.json({
                          message: "Username or password is incorrect",
                      });
        })
        .catch((err) => {
            next(err);
        });
}

function register(req, res, next) {
    clientService
        .create(req.body)
        .then((client) => {
            res.json({});
        })
        .catch((err) => next(err));
}

function getAll(req, res, next) {
    clientService
        .getAll()
        .then((users) => res.json(users))
        .catch((err) => next(err));
}

function getCurrent(req, res, next) {
    clientService
        .getById(req.user.sub)
        .then((user) => (user ? res.json(user) : res.sendStatus(404)))
        .catch((err) => next(err));
}

function getById(req, res, next) {
    clientService
        .getById(req.params.id)
        .then((user) => (user ? res.json(user) : res.sendStatus(404)))
        .catch((err) => next(err));
}

function update(req, res, next) {
    clientService
        .update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch((err) => next(err));
}

function _delete(req, res, next) {
    clientService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch((err) => next(err));
}
