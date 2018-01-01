var exp = require('express');
var route = exp.Router();
var company = require('../model/Company_model');

route.get('/:id?', function (req, res, next) {
    if (req.params.id) {

        company.getCompanyById(req.params.id, function (err, rows) {

            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {

        company.getAllCompany(function (err, row) {

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

    company.deleteCompanyById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    company.updateCompany(req.params.id, req.body, function (err, row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {

    company.addCompany(req.body, function (err, count) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(req.body);
        }
    });
});

module.exports = route;