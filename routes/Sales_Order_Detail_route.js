var exp = require('express');
var route = exp.Router();
var sale_order_detail = require('../model/Sales_Order_Detail_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        sale_order_detail.getSales_Order_DetailById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        sale_order_detail.getAllSales_Order_Detail(function (err, row) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(row);
            }
        });
    }
});

route.delete('/:id/:id1', function (req, res, next) {

    sale_order_detail.deleteSales_Order_DetailById(req.params.id,req.params.id1, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id/:id', function (req, res, next) {

    sale_order_detail.updateSales_Order_Detail(req.params.id,req.params.id1, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    sale_order_detail.addSales_Order_Detail(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;