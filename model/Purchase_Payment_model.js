var db = require('../dbconnection');
var purchase_payment = {
    getAllPurchase_Payment: function (callback) {

      return  db.query("select * from Purchase_Payment", callback);
    },

    getPurchase_PaymentById:function(id,callback){
      return db.query("select * from Purchase_Payment where Purchase_payment_id=?",[id],callback);
   },

    deletePurchase_PaymentById: function (id, callback) {

     return   db.query("delete from Purchase_Payment where Purchase_payment_id=?", [id], callback);
    },

    updatePurchase_Payment:function(id,purchase_payment,callback)
    {
      console.log(purchase_payment.date);
      console.log(id);
      return  db.query("update Purchase_Payment set Purchase_payment_date=?,Payment_type=? where Purchase_payment_id=?",[purchase_payment.Purchase_payment_date,purchase_payment.Payment_type,id],callback);
    },
    
    addPurchase_Payment:function(purchase_payment,callback){
       return db.query("insert into Purchase_Payment (Purchase_payment_id,Purchase_payment_date,Supplier_id,Payment_type) values(?,?,?,?)",[null,purchase_payment.Purchase_payment_date,purchase_payment.Supplier_id,purchase_payment.Payment_type],callback);
    }
    
};
module.exports = purchase_payment;