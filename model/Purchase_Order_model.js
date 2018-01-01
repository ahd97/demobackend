var db = require('../dbconnection');
var purchase_order = {
    getAllPurchase_Order: function (callback) {

      return  db.query("select * from Purchase_Order", callback);
    },

    getPurchase_OrderById:function(id,callback){
      return db.query("select * from Purchase_Order where Purchase_order_id=?",[id],callback);
   },

    deletePurchase_OrderById: function (id, callback) {

     return   db.query("delete from Purchase_Order where Purchase_order_id=?", [id], callback);
    },

    updatePurchase_Order:function(id,purchase_order ,callback)
    {
      console.log(purchase_order.Purchase_order_status);
      console.log(id);
      return  db.query("update Purchase_Order set Purchase_order_status=? ,User_id=?,Supplier_id=? where Purchase_order_id=?",[purchase_order.Purchase_order_status,purchase_order.User_id,purchase_order.Supplier_id,id],callback);
    },
    
    addPurchase_Order:function(purchase_order,callback){
      console.log(purchase_order.Purchase_order_status);
       return db.query("insert into Purchase_Order (Purchase_order_id,User_id,Supplier_id,Purchase_order_status) values(?,?,?,?)",[null,purchase_order.User_id,purchase_order.Supplier_id,purchase_order.Purchase_order_status],callback);
    }
    
};
module.exports = purchase_order;