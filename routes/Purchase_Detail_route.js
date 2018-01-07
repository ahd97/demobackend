var exp = require('express');
var route = exp.Router();
var purchase_detail = require('../model/Purchase_Detail_model');

route.get('/:id/:id1?', function (req, res, next) {
    if (req.params.id,req.params.id1) {

        purchase_detail.getPurchase_DetailById(req.params.id,req.params.id1, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        purchase_detail.getAllPurchase_Detail(function (err, row) {

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

    purchase_detail.deletePurchase_DetailById(req.params.id,req.params.id1, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    purchase_detail.updatePurchase_Detail(req.params.id,req.params.id1, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    purchase_detail.addPurchase_Detail(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;