var db = require('../dbconnection');
var image = {
    getAllImage: function (callback) {

      return  db.query("SELECT image.Image_id,image.Path,product.Product_name FROM image,product WHERE image.Product_id=product.Product_id", callback);
    },

    getImageById:function(id,callback){
      return db.query("SELECT image.Image_id,image.Path,product.Product_name FROM image,product WHERE image.Product_id=product.Product_id and Image_id=?",[id],callback);
   },

    deleteImageById: function (id, callback) {

     return   db.query("delete from Image where Image_id=?", [id], callback);
    },

    updateImage:function(id,image,callback)
    {
      console.log(image.Path);
      console.log(id);
      return  db.query("update Image set Path=? where Image_id=?",[image.Path,id],callback);
    },
    
    addImage:function(image,callback){
       return db.query("insert into Image (Image_id,Path) values(?,?)",[null,image.Path],callback);
    }

    
};
module.exports = image;