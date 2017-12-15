var exp = require('express');
var route = exp.Router();
var product = require('../model/Product_model');

route.get('/', function (req, res, next) {
    if(req.params.id){
        
       Task.getTaskById(req.params.id,function(err,rows){
        
       if(err)
         {
         res.json(err);
         }
         else{
         res.json(rows);
         }
         });
        }
        else{

    product.getAllProducts(function (err, row) {

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

    product.deleteProductById(req.params.id, function (err, row) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }

    });
});

route.put('/:id', function (req, res, next) {

    product.updateProduct(req.params.id, req.body, function (err,row) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(row);
        }
    });
});

route.post('/', function (req, res, next) {
    
        product.addTask(req.body, function (err,count) {
    
            if (err) {
                res.json(err);
            }
            else {
                res.json(req.body);
            }
        });
    });
    route.post('/', function (req, res, next) {
        
            product.addTask(req.body, function (err,count) {
        
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(req.body);
                }
            });
        });

module.exports = route;