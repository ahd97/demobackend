var db = require('../dbconnection');
var product = {
    getAllProducts: function (callback) {

      return  db.query("product,product_category,color,design,company where product.Design_id=design.Design_id AND product.Color_id=color.Color_id AND product.Product_cat_id=product_category.Product_cat_id AND product.Company_id=company.Company_id", callback);
    },

    getProductById:function(id,callback){
      return db.query("product,product_category,color,design,company where product.Design_id=design.Design_id AND product.Color_id=color.Color_id AND product.Product_cat_id=product_category.Product_cat_id AND product.Company_id=company.Company_id and Product_id=?",[id],callback);
   },

    deleteProductById: function (id, callback) {

     return   db.query("delete from Product where Product_id=?", [id], callback);
    },

    updateProduct:function(id,product,callback)
    {
      console.log(product.Product_name);
      console.log(id);
      return  db.query("update Product set Product_name=?,Description=?,QOH=? where Product_id=?",[product.Product_name,product.Description,product.QOH,id],callback);
    },
    
    addProduct:function(product,callback){
       return db.query("insert into Product values(?,?,?,?,?,?,?,?,?,?,?)",[null,product.Product_name,product.Description,product.QOH,product.Price,product.Product_cat_id,product.Color_id,product.Design_id,product.is_active,product.created_date,product.updated_date],callback);
    }
    
};
module.exports = product;