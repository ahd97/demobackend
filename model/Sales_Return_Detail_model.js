var db = require('../dbconnection');
var sales_return_detail = {
    getAllSales_Return_Detail: function (callback) {

      return  db.query("select * from Sales_Return_Detail", callback);
    },

    getSales_Return_DetailById:function(id,callback){
      return db.query("select * from Sales_Return_Detail where Sales_return_id=?",[id],callback);
   },

    deleteSales_Return_DetailById: function (id, callback) {

     return   db.query("delete from Sales_Return_Detail where Sales_return_id=?", [id], callback);
    },

    updateSales_Return_Detail:function(id,sales_return_detail,callback)
    {
      console.log(sales_return_detail.Qty);
      console.log(id);
      return  db.query("update Sales_Return_Detail set Qty=? where Sales_return_id=? and Product_id=?",[sales_return_detail.Qty,id,sales_return_detail.Product_id],callback);
    },
    
    addSales_Return_Detail:function(sales_return_detail,callback){
       return db.query("insert into Sales_Return_Detail(Sales_return_id,Product_id,Qty) values(?,?,?)",[sales_return_detail.Sales_return_id,sales_return_detail.Product_id,sales_return_detail.Qty],callback);
    }
    
};
module.exports = sales_return_detail;