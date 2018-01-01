var db = require('../dbconnection');
var sales_detail = {
    getAllSales_Detail: function (callback) {

      return  db.query("select * from Sales_Detail", callback);
    },

    getSales_DetailById:function(id,callback){
      return db.query("select * from Sales_Detail where Sales_id=?",[id],callback);
   },

    deleteSales_DetailById: function (id, callback) {

     return   db.query("delete from Sales_Detail where Sales_id=?", [id], callback);
    },

    updateSales_Detail:function(id,sales_detail,callback)
    {
      console.log(sales_detail.Qty);
      console.log(id);
      return  db.query("update Sales_Detail set Qty=? where Sales_id=? and Product_id=?",[sales_detail.Qty,id,sales_detail.Product_id],callback);
    },
    
    addSales_Detail:function(sales_detail,callback){
       return db.query("insert into Sales_Detail (Sales_id,Product_id,Qty) values(?,?,?)",[sales_detail.Sales_id,sales_detail.Product_id,sales_detail.Qty],callback);
    }
    
};
module.exports = sales_detail;