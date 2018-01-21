var db = require('../dbconnection');
var sale = {
    getAllSales: function (callback) {

      return  db.query("select * from Sales", callback);
    },

    getSaleById:function(id,callback){
      return db.query("select * from Sales where Sales_id=?",[id],callback);
   },

    deleteSaleById: function (id, callback) {

     return   db.query("delete from Sales where Sales_id=?", [id], callback);
    },

    updateSale:function(id,sale,callback)
    {
      console.log(sale.Sales_date);
      console.log(id);
      return  db.query("update Sales set Sales_order_id=?,Sales_date=?,Amount=?,Sales_payment_id=? where Sales_id=?",[sale.Sales_order_id,sale.Sales_date,sale.Amount,sale.Sales_payment_id,id],callback);
    },
    
    addSale:function(sale,callback){
       return db.query("insert into Sales (Sales_id,Sales_order_id,Sales_date,Amount,Sales_payment_id) values(?,?,?,?,?)",[null,sale.Sales_order_id,sale.Sales_date,sale.Amount,sale.Sales_payment_id],callback);
    }
    
};
module.exports = sale;