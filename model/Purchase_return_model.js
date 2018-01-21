var db = require('../dbconnection');
var purchase_return = {
    getAllPurchase_Return: function (callback) {

      return  db.query("select * from Purchase_Return", callback);
    },

    getPurchase_ReturnById:function(id,callback){
      return db.query("select * from Purchase_Return where Purchase_return_id=?",[id],callback);
   },

    deletePurchase_ReturnById: function (id, callback) {

     return   db.query("delete from Purchase_Return where Purchase_return_id=?", [id], callback);
    },

    updatePurchase_Return:function(id,purchase_return,callback)
    {
      console.log(purchase_return.Purchase_return_date);
      console.log(id);
      return  db.query("update Purchase_Return set Purchase_id=?, Purchase_return_date=? where Purchase_return_id=?",[purchase_return.Purchase_id,purchase_return.Purchase_return_date,id],callback);
    },
    
    addPurchase_Return:function(purchase_return,callback){
       return db.query("insert into Purchase_Return(Purchase_return_id,Purchase_id,Purchase_return_date) values(?,?,?)",[null,purchase_return.Purchase_id,purchase_return.Purchase_return_date],callback);
    }
    
};
module.exports = purchase_return;