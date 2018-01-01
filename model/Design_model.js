var db = require('../dbconnection');
var design = {
    getAllDesign: function (callback) {

      return  db.query("select * from Design", callback);
    },

    getDesignById:function(id,callback){
      return db.query("select * from Design where Design_id=?",[id],callback);
   },

    deleteDesignById: function (id, callback) {

     return   db.query("delete from Design where Design_id=?", [id], callback);
    },

    updateDesign:function(id,design,callback)
    {
      console.log(design.Design_name);
      console.log(id);
      return  db.query("update Design set Design_name=? where Design_id=?",[design.Design_name,id],callback);
    },
    
    addDesign:function(design,callback){
       return db.query("insert into Design (Design_id,Design_name) values(?,?)",[null,design.Design_name],callback);
    }
    
};
module.exports = design;