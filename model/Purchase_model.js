var db = require('../dbconnection');
var purchase = {
    getAllPurchase: function (callback) {

      return  db.query("select * from Purchase", callback);
    },

    getPurchaseById:function(id,callback){
      return db.query("select * from Purchase where Purchase_id=?",[id],callback);
   },

    deletePurchaseById: function (id, callback) {

     return   db.query("delete from Purchase where Purchase_id=?", [id], callback);
    },

    updatePurchase:function(id,purchase,callback)
    {
      console.log(purchase.Amount);
      console.log(id);
      return  db.query("update Purchase set Purchase_date=?,Amount=? where Purchase_id=?",[purchase.Purchase_date,purchase.Amount,id],callback);
    },
    
    addPurchase:function(purchase,callback){
       return db.query("insert into Purchase(Purchase_id,Purchase_date,Purchase_order_id,Purchase_payment_id,Amount) values(?,?,?,?,?)",[null,purchase.Purchase_date,purchase.Purchase_order_id,purchase.Purchase_payment_id,purchase.Amount],callback);
    }
    
};
module.exports = purchase;