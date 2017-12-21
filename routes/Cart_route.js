var exp = require('express');
var route = exp.Router();
var cart = require('../model/Cart_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        cart.getCartById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        cart.getAllCart(function (err, row) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(row);
            }
        });
    }
});

route.delete('/:id', function (req, res, next) {

    cart.deleteCartById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    cart.updateCart(req.params.id, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    cart.addCart(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;