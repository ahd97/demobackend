var db = require('../dbconnection');
var sales_return = {
    getAllSales_Return: function (callback) {

      return  db.query("select * from Sales_Return", callback);
    },

    getSales_ReturnById:function(id,callback){
      return db.query("select * from Sales_Return where Sales_return_id=?",[id],callback);
   },

    deleteSales_ReturnById: function (id, callback) {

     return   db.query("delete from Sales_Return where Sales_return_id=?", [id], callback);
    },

    updateSales_Return:function(id,sales_return,callback)
    {
      console.log(sales_return.Sales_return_date);
      console.log(id);
      return  db.query("update Sales_Return set Sales_id=?,Sales_return_date=? where Sales_return_id=?",[sales_return.Sales_id,sales_return.Sales_return_date,id],callback);
    },
    
    addSales_Return:function(sales_return,callback){
       return db.query("insert into Sales_Return (Sales_return_id,Sales_id,Sales_return_date) values(?,?,?)",[null,sales_return.Sales_id,sales_return.Sales_return_date],callback);
    }
    
};
module.exports = sales_return;