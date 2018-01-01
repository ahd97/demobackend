var exp = require('express');
var route = exp.Router();
var sale_order = require('../model/Sales_Order_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        sale_order.getSales_OrderById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        sale_order.getAllSales_Order(function (err, row) {

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

    sale_order.deleteSales_OrderById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    sale_order.updateSales_Order(req.params.id, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    sale_order.addSales_Order(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;