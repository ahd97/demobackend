var exp=require('express');
var route=exp.Router();
var product=require('../model/Product_model');

route.get('/',function(req,res,next){

    product.getAllProducts(function(err,row){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(row);
        }
    });
});

module.exports=route;