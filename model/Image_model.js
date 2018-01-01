var db = require('../dbconnection');
var image = {
    getAllImage: function (callback) {

      return  db.query("select * from Image", callback);
    },

    getImageById:function(id,callback){
      return db.query("select * from Image where Image_id=?",[id],callback);
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