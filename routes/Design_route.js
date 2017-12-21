var exp = require('express');
var route = exp.Router();
var design = require('../model/Design_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        design.getDesignById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        design.getAllDesign(function (err, row) {

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

    design.deleteDesignById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    design.updateDesign(req.params.id, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    design.addDesign(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;