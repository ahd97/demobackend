var db = require('../dbconnection');
var sales_detail = {
    getAllSales_Detail: function (callback) {

      return  db.query("SELECT sales_detail.Sales_id,product.Product_name,sales_detail.Qty,sales_detail.Price_per_unit FROM sales_detail,product WHERE sales_detail.Product_id=product.Product_id", callback);
    },

    getSales_DetailById:function(id,callback){
      return db.query("SELECT *FROM sales_detail WHERE Sales_id=?",[id],callback);
   },

    deleteSales_DetailById: function (id,id1, callback) {

     return   db.query("delete from Sales_Detail where Sales_id=? and Product_id=?", [id,id1], callback);
    },

    updateSales_Detail:function(id,id1,sales_detail,callback)
    {
      console.log(sales_detail.Qty);
      console.log(id);
      return  db.query("update Sales_Detail set Product_id=?,Qty=?,Price_per_unit=? where Sales_id=? and Product_id=?",[sales_detail.Product_id,sales_detail.Qty,sales_detail.Price_per_unit,id,id1],callback);
    },
    
    addSales_Detail:function(sales_detail,callback){
       return db.query("insert into Sales_Detail (Sales_id,Product_id,Qty,Price_per_unit) values(?,?,?,?)",[sales_detail.Sales_id,sales_detail.Product_id,sales_detail.Qty,sales_detail.Price_per_unit],callback);
    }
    
};
module.exports = sales_detail;