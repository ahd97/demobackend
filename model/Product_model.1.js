var db = require('../dbconnection');
var product = {
    getAllProducts: function (callback) {

      return  db.query("select * from Product", callback);
    },

    getProductById:function(id,callback){
      return db.query("select * from Product where Product_id=?",[id],callback);
   },

    deleteProductById: function (id, callback) {

     return   db.query("delete from Product where Product_id=?", [id], callback);
    },

    updateProduct:function(id,product,callback)
    {
      console.log(product.Product_name);
      console.log(id);
      return  db.query("update Product set Product_name=? where Product_id=?",[product.Product_name,id],callback);
    },
    
    addProduct:function(product,callback){
       return db.query("insert into Product values(?,?)",[product.Product_id,product.Product_name],callback);
    }
    
};
module.exports = product;