var db = require('../dbconnection');
var purchase_order_detail = {
    getAllPurchase_Order_Detail: function (callback) {

      return  db.query("SELECT purchase_order_detail.Purchase_order_id,product.Product_name,purchase_order_detail.Received_date,purchase_order_detail.Qty_ordered,purchase_order_detail.Qty_received FROM purchase_order_detail,product WHERE purchase_order_detail.Product_id=product.Product_id", callback);
    },

    getPurchase_Order_DetailById:function(id,callback){
      return db.query("SELECT *FROM purchase_order_detail WHERE Purchase_order_id=?",[id],callback);
   },

    deletePurchase_Order_DetailById: function (id,id1, callback) {

     return   db.query("delete from Purchase_Order_Detail where Purchase_order_id=? and Product_id=?", [id,id1], callback);
    },

    updatePurchase_Order_Detail:function(id,id1,purchase_order_detail ,callback)
    {
      console.log(purchase_order_detail.Qty_ordered);
      console.log(id);
      return  db.query("update Purchase_Order_Detail set Received_date=?,Qty_ordered=?,Qty_received=? where Purchase_order_id=? and Product_id=?",[purchase_order_detail.Received_date,purchase_order_detail.Qty_ordered,purchase_order_detail.Qty_received,id,id1],callback);
    },
    
    addPurchase_Order_Detail:function(purchase_order_detail,callback){
       return db.query("insert into Purchase_Order_Detail (Purchase_order_id,Product_id,Received_date,Qty_ordered,Qty_received) values(?,?,?,?,?)",[purchase_order_detail.Purchase_order_id,purchase_order_detail.Product_id,purchase_order_detail.Received_date,purchase_order_detail.Qty_ordered,purchase_order_detail.Qty_received],callback);
    }
    
};
module.exports = purchase_order_detail;