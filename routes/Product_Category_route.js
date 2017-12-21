var exp = require('express');
var route = exp.Router();
var product_cat= require('../model/Product_Category_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        product_cat.getProduct_CategoryById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        product_cat.getAllProduct_Category(function (err, row) {

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

    product_cat.deleteProduct_CategoryById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    product_cat.updateProduct_Category(req.params.id, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    product_cat.addProduct_Category(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;