var db = require('../dbconnection');
var cart_detail = {
    getAllCart_Detail: function (callback) {

      return  db.query("select * from Cart_Detail", callback);
    },

    getCart_DetailById:function(id,callback){
      return db.query("select * from Cart_Detail where Cart_id=?",[id],callback);
   },

    deleteCart_DetailById: function (id, callback) {

     return   db.query("delete from Cart_Detail where Cart_id=?", [id], callback);
    },

    updateCart_Detail:function(id,cart_detail,callback)
    {
      console.log(cart_detail.cart_detail_id);
      console.log(id);
      return  db.query("update Cart_Detail set Qty=? where Cart_id=? and Product_id=?",[cart_detail.Qty,id,cart_detail.Product_id],callback);
    },
    
    addCart_Detail:function(cart_detail,callback){
       return db.query("insert into Cart_Detail(Cart_id,Product_id,Qty) values(?,?,?)",[cart_detail.Cart_id,cart_detail.Product_id,cart_detail.Qty],callback);
    }

    
};
module.exports = cart_detail;