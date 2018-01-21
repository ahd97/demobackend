var db = require('../dbconnection');
var sales_order = {
    getAllSales_Order: function (callback) {

      return  db.query("SELECT sales_order.Sales_order_id,sales_order.User_id,sales_order.Customer_name,sales_order.Order_date,sales_order.Order_address,city.City_name,sales_order.Order_status FROM sales_order,city WHERE sales_order.City_id=city.City_id", callback);
    },

    getSales_OrderById:function(id,callback){
      return db.query("SELECT * FROM sales_order WHERE Sales_order_id=?",[id],callback);
   },

    deleteSales_OrderById: function (id, callback) {

     return   db.query("delete from Sales_Order where Sales_order_id=?", [id], callback);
    },

    updateSales_Order:function(id,sales_order,callback)
    {
      console.log(sales_order.Order_address);
      console.log(id);
      return  db.query("update Sales_Order set Customer_name=?,Order_date=?,Order_address=?,Order_status=? where Sales_order_id=?",[sales_order.Customer_name,sales_order.Order_date,sales_order.Order_address,sales_order.Order_status,id],callback);
    },
    
    addSales_Order:function(sales_order,callback){
      console.log(sales_order.Order_address);
      console.log(sales_order.Order_date);
      console.log(sales_order.Order_status);
      
       return db.query("insert into Sales_Order (Sales_order_id,User_id,Customer_name,Order_date,Order_address,City_id,Order_status) values(?,?,?,?,?,?,?)",[null,sales_order.User_id,sales_order.Customer_name,sales_order.Order_date,sales_order.Order_address,sales_order.City_id,sales_order.Order_status],callback);
    }
    
};
module.exports = sales_order;