var db = require('../dbconnection');
var purchase_detail = {
    getAllPurchase_Detail: function (callback) {

      return  db.query("select * from Purchase_Detail", callback);
    },

    getPurchase_DetailById:function(id,callback){
      return db.query("select * from Purchase_Detail where Purchase_id=?",[id],callback);
   },

    deletePurchase_DetailById: function (id, callback) {

     return   db.query("delete from Purchase_Detail where Purchase_id=?", [id], callback);
    },

    updatePurchase_Detail:function(id,purchase_detail,callback)
    {
      console.log(purchase_detail.Qty);
      console.log(id);
      return  db.query("update Purchase_Detail set Price_per_unit=?,Qty=? where Purchase_id=? and Product_id",[purchase_detail.Price_per_unit,purchase_detail.Qty,id,purchase_detail.Product_id],callback);
    },
    
    addPurchase_Detail:function(purchase_detail,callback){
       return db.query("insert into Purchase_Detail (Purchase_id,Product_id,Price_per_unit,Qty) values(?,?,?,?)",[purchase_detail.Purchase_id,purchase_detail.Product_id,purchase_detail.Price_per_unit,purchase_detail.Qty],callback);
    }
    
};
module.exports = purchase_detail;