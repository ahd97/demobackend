var db = require('../dbconnection');
var sales_payment
 = {
    getAllSales_Payment: function (callback) {

      return  db.query("SELECT sales_payment.Sales_payment_id,sales_payment.Sales_id,sales_payment.Sales_payment_date,user_master.User_name,sales_payment.Payment_type FROM sales_payment,user_master WHERE sales_payment.User_id=user_master.User_id", callback);
    },

    getSales_PaymentById:function(id,callback){
      return db.query("SELECT sales_payment.Sales_payment_id,sales_payment.Sales_id,sales_payment.Sales_payment_date,user_master.User_name,sales_payment.Payment_type FROM sales_payment,user_master WHERE sales_payment.User_id=user_master.User_id and Sales_payment_id=?",[id],callback);
   },

    deleteSales_PaymentById: function (id, callback) {

     return   db.query("delete from Sales_Payment where Sales_payment_id=?", [id], callback);
    },

    updateSales_Payment:function(id,sales_payment,callback)
    {
      console.log(sales_payment.Payment_type);
      console.log(id);
      return  db.query("update Sales_Payment set Sales_payment_date=?,Payment_type=? where Sales_payment_id=?",[sales_payment.Sales_payment_date,sales_payment.Payment_type,id],callback);
    },
    
    addSales_Payment:function(sales_payment,callback){
       return db.query("insert into Sales_Payment(Sales_payment_id,Sales_payment_date,Payment_type) values(?,?,?)",[null,sales_payment.Sales_payment_date,sales_payment.Payment_type],callback);
    }
    
};
module.exports = sales_payment;