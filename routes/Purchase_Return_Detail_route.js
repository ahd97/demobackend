var exp = require('express');
var route = exp.Router();
var purchase_return_detail = require('../model/Purchase_Return_Detail_model');

route.get('/:id/:id1?', function (req, res, next) {
    if (req.params.id,req.params.id1) {

        purchase_return_detail.getPurchase_Return_DetailById(req.params.id,req.params.id1, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        purchase_return_detail.getAllPurchase_Return_Detail(function (err, row) {

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

    purchase_return_detail.deletePurchase_Return_DetailById(req.params.id,req.params.id1, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id/:id1', function (req, res, next) {

    purchase_return_detail.updatePurchase_Return_Detail(req.params.id,req.params.id1, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    purchase_return_detail.addPurchase_Return_Detail(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;