var db = require('../dbconnection');
var purchase_return_detail = {
    getAllPurchase_Return_Detail: function (callback) {

      return  db.query("SELECT purchase_return_detail.Purchase_return_id,product.Product_name,purchase_return_detail.Qty FROM purchase_return_detail,product WHERE purchase_return_detail.Product_id=product.Product_id", callback);
    },

    getPurchase_Return_DetailById:function(id,callback){
      return db.query("SELECT purchase_return_detail.Purchase_return_id,product.Product_name,purchase_return_detail.Qty FROM purchase_return_detail,product WHERE purchase_return_detail.Product_id=product.Product_id and Purchase_return_id=?",[id],callback);
   },

    deletePurchase_Return_DetailById: function (id,id1, callback) {

     return   db.query("delete from Purchase_Return_Detail where Purchase_return_id=? and Product_id=?", [id,id1], callback);
    },

    updatePurchase_Return_Detail:function(id,id1,purchase_return_detail,callback)
    {
      console.log(purchase_return_detail.Qty);
      console.log(id);
      return  db.query("update Purchase_Return_Detail set Qty=? where Purchase_return_id=? and Product_id=?",[purchase_return_detail.Qty,id,id1],callback);
    },
    
    addPurchase_Return_Detail:function(purchase_return_detail,callback){
       return db.query("insert into Purchase_Return_Detail (Purchase_return_id,Product_id,Qty) values(?,?,?)",[purchase_return_detail.Purchase_return_id,purchase_return_detail.Product_id,purchase_return_detail.Qty],callback);
    }
    
};
module.exports = purchase_return_detail;