var db = require('../dbconnection');
var purchase_order_detail = {
    getAllPurchase_Order_Detail: function (callback) {

      return  db.query("select * from Purchase_Order_Detail", callback);
    },

    getPurchase_Order_DetailById:function(id,callback){
      return db.query("select * from Purchase_Order_Detail where Purchase_order_id=?",[id],callback);
   },

    deletePurchase_Order_DetailById: function (id, callback) {

     return   db.query("delete from Purchase_Order_Detail where Purchase_order_id=?", [id], callback);
    },

    updatePurchase_Order_Detail:function(id,purchase_order_detail ,callback)
    {
      console.log(purchase_order_detail.Qty_ordered);
      console.log(id);
      return  db.query("update Purchase_Order_Detail set Qty_ordered=?,Qty_received=? where Purchase_order_id=? and Product_id=?",[purchase_order_detail.Qty_ordered,purchase_order_detail.Qty_received,id,purchase_order_detail.Product_id],callback);
    },
    
    addPurchase_Order_Detail:function(purchase_order_detail,callback){
       return db.query("insert into Purchase_Order_Detail (Purchase_order_id,Product_id,Qty_ordered,Qty_received) values(?,?,?,?)",[purchase_order_detail.Purchase_order_id,purchase_order_detail.Product_id,purchase_order_detail.Qty_ordered,purchase_order_detail.Qty_received],callback);
    }
    
};
module.exports = purchase_order_detail;