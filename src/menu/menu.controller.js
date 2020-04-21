import express from 'express';
const router = express.Router();

const menuService = require("./menu.service");

// routes
router.post('/addMenu', addMenu);
router.get('/', getAll);
router.put('/:id', update);
router.delete('/:id', _delete);
router.get('/:id', getByRestaurantId);

module.exports = router;

function addMenu(req, res, next) {
    menuService
        .create(req.body)
        .then((menu) => res.json(menu))
        .catch((err) => next(err));
}

function getAll(req, res, next) {
    menuService
        .getAll()
        .then((users) => res.json(users))
        .catch((err) => next(err));
}

function update(req, res, next) {
    menuService
        .update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch((err) => next(err));
}


function getByRestaurantId(req, res, next) {
    menuService
        .getByRestaurant(req.params.id)
        .then((menu) => res.json(menu))
        .catch((err) => next(err));
}

function _delete(req, res, next) {
    menuService
        .delete(req.params.id)
        .then(() => res.json({}))
        .catch((err) => next(err));
}