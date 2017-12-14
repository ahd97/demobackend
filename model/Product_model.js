var db=require('../dbconnection');
var product={
    getAllProducts:function(callback){

        db.query("select * from Product",callback);
    },
    deleteProductById:function(id,callback){
        
                db.query("delete from Product where product_id=?",[id],callback);
            }
};
module.exports=product;