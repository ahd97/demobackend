var exp = require('express');
var route = exp.Router();
var purchase_order_detail = require('../model/Purchase_Order_Detail_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        purchase_order_detail.getPurchase_Order_DetailById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        purchase_order_detail.getAllPurchase_Order_Detail(function (err, row) {

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

    purchase_order_detail.deletePurchase_Order_DetailById(req.params.id,req.params.id1, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id/:id1', function (req, res, next) {

    purchase_order_detail.updatePurchase_Order_Detail(req.params.id,req.params.id1, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    purchase_order_detail.addPurchase_Order_Detail(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;