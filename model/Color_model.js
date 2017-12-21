var db = require('../dbconnection');
var color = {
    getAllColor: function (callback) {

      return  db.query("select * from Color", callback);
    },

    getColorById:function(id,callback){
      return db.query("select * from Color where Color_id=?",[id],callback);
   },

    deleteColorById: function (id, callback) {

     return   db.query("delete from Color where Color_id=?", [id], callback);
    },

    updateColor:function(id,color,callback)
    {
      console.log(color.Color_name);
      console.log(id);
      return  db.query("update Color set Color_name=? where Color_id=?",[color.Color_name,id],callback);
    },
    
    addColor:function(color,callback){
       return db.query("insert into Color values(?,?)",[color.Color_id,color.Color_name],callback);
    }
    
};
module.exports = color;