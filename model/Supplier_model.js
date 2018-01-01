var db = require('../dbconnection');
var supplier = {
    getAllSupplier: function (callback) {

      return  db.query("select * from Supplier", callback);
    },

    getSupplierById:function(id,callback){
      return db.query("select * from Supplier where Supplier_id=?",[id],callback);
   },

    deleteSupplierById: function (id, callback) {

     return   db.query("delete from Supplier where Supplier_id=?", [id], callback);
    },

    updateSupplier:function(id,supplier,callback)
    {
      console.log(supplier.Name);
      console.log(id);
      return  db.query("update Supplier set Name=?,Address=?,Ph_no=? where Supplier_id=?",[supplier.Name,supplier.Address,supplier.Ph_no,id],callback);
    },
    
    addSupplier:function(supplier,callback){
       return db.query("insert into Supplier(Supplier_id,Name,Address,Ph_no) values(?,?,?,?)",[null,supplier.Name,supplier.Address,supplier.Ph_no],callback);
    }
    
};
module.exports = supplier;