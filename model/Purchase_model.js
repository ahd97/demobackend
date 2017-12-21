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
      console.log(purchase.Purchase_date);
      console.log(id);
      return  db.query("update Purchase set Purchase_date=? where Purchase_id=?",[purchase.Purchase_date,id],callback);
    },
    
    addPurchase:function(purchase,callback){
       return db.query("insert into Purchase values(?,?)",[purchase.Purchase_id,purchase.Purchase_order_id],callback);
    }
    
};
module.exports = purchase;