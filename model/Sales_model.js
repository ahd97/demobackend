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
      return  db.query("update Sales set Sales_date=? where Sales_id=?",[sale.Sales_date,id],callback);
    },
    
    addSale:function(sale,callback){
       return db.query("insert into Sales values(?,?)",[sale.Sales_id,sale.Sales_order_id],callback);
    }
    
};
module.exports = sale;