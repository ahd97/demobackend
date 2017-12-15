var db = require('../dbconnection');
var product = {
    getAllProducts: function (callback) {

      return  db.query("select * from Product", callback);
    },
    deleteProductById: function (id, callback) {

     return   db.query("delete from Product where Product_id=?", [id], callback);
    },
    updateProduct(id,pro,callback)
    {
      console.log(pro.Product_name);
      console.log(id);
      return  db.query("update Product set Product_name=? where id=?,[pro.Product_name,id],callback");
    },
    getTaskById:function(id,callback){
      return db.query("select * from Product where Product_id=?",[id],callback);
   },
    addTask:function(prod,callback){
       return db.query("Insert into task values(?,?)",[prod.Product_id,prod.Product_name],callback);
    }
};
module.exports = product;