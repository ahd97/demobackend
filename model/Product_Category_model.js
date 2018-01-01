var db = require('../dbconnection');
var product_cat = {
    getAllProduct_Category: function (callback) {

      return  db.query("select * from Product_Category", callback);
    },

    getProduct_CategoryById:function(id,callback){
      return db.query("select * from Product_Category where Product_cat_id=?",[id],callback);
   },

    deleteProduct_CategoryById: function (id, callback) {

     return   db.query("delete from Product_Category where Product_cat_id=?", [id], callback);
    },

    updateProduct_Category:function(id,product_cat,callback)
    {
      console.log(product_cat.Category_name);
      console.log(id);
      return  db.query("update Product_Category set Category_name=? where Product_cat_id=?",[product_cat.Category_name,id],callback);
    },
    
    addProduct_Category:function(product_cat,callback){
       return db.query("insert into Product_Category(Product_cat_id,Category_name) values(?,?)",[null,product_cat.Category_name],callback);
    }
    
};
module.exports = product_cat;