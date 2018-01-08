var db = require('../dbconnection');
var sales_order_detail = {
    getAllSales_Order_Detail: function (callback) {

      return  db.query("SELECT sales_order_detail.Sales_order_id,product.Product_name,sales_order_detail.Qty_dispatched,sales_order_detail.Qty_ordered FROM sales_order_detail,product WHERE sales_order_detail.Product_id=product.Product_id", callback);
    },

    getSales_Order_DetailById:function(id,callback){
      return db.query("SELECT sales_order_detail.Sales_order_id,product.Product_name,sales_order_detail.Qty_dispatched,sales_order_detail.Qty_ordered FROM sales_order_detail,product WHERE sales_order_detail.Product_id=product.Product_id and Sales_order_id=?",[id],callback);
   },

    deleteSales_Order_DetailById: function (id,id1, callback) {

     return   db.query("delete from Sales_Order_Detail where Sales_order_id=? and Product_id=?", [id,id1], callback);
    },

    updateSales_Order_Detail:function(id,id1,sales_order_detail,callback)
    {
      console.log(sales_order_detail.Qty_ordered);
      console.log(id);
      return  db.query("update Sales_Order_Detail set Qty_dispatched=?,Qty_ordered=? where Sales_order_id=? and Product_id=?",[sales_order_detail.Qty_dispatched,sales_order_detail.Qty_ordered,id,id1],callback);
    },
    
    addSales_Order_Detail:function(sales_order_detail,callback){
       return db.query("insert into Sales_Order_Detail (Sales_order_id,Product_id,Qty_dispatched,Qty_ordered) values(?,?,?,?)",[sales_order_detail.Sales_order_id,sales_order_detail.Product_id,sales_order_detail.Qty_dispatched,sales_order_detail.Qty_ordered],callback);
    }
    
};
module.exports = sales_order_detail;