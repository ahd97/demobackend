var exp = require('express');
var route = exp.Router();
var sale_return_detail = require('../model/Sales_Return_Detail_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        sale_return_detail.getSales_Return_DetailById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        sale_return_detail.getAllSales_Return_Detail(function (err, row) {

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

    sale_return_detail.deleteSales_Return_DetailById(req.params.id,req.params.id1, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id/:id1', function (req, res, next) {

    sale_return_detail.updateSales_Return_Detail(req.params.id,req.params.id1, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    sale_return_detail.addSales_Return_Detail(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;