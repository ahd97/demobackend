var db = require('../dbconnection');
var cart_detail = {
    getAllCart_Detail: function (callback) {

      return  db.query("SELECT cart_detail.Cart_id,product.Product_name,cart_detail.Qty FROM cart_detail,product WHERE cart_detail.Product_id=product.Product_id", callback);
    },

    getCart_DetailById:function(id,callback){
      return db.query("SELECT *FROM cart_detail WHERE Cart_id=?",[id],callback);
   },

    deleteCart_DetailById: function (id,id1, callback) {

     return   db.query("delete from Cart_Detail where Cart_id=? and Product_id=?", [id,id1], callback);
    },

    updateCart_Detail:function(id,id1,cart_detail,callback)
    {
      console.log(cart_detail.Qty);
      console.log(id);
      console.log(id1);
      
      return  db.query("update Cart_Detail set Qty=? where Cart_id=? and Product_id=?",[cart_detail.Qty,id,id1],callback);
    },
    
    addCart_Detail:function(cart_detail,callback){
       return db.query("insert into Cart_Detail(Cart_id,Product_id,Qty) values(?,?,?)",[cart_detail.Cart_id,cart_detail.Product_id,cart_detail.Qty],callback);
    }

    
};
module.exports = cart_detail;