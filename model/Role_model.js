var db = require('../dbconnection');
var role = {
    getAllRole: function (callback) {

      return  db.query("select * from Role_Master", callback);
    },

    getRoleById:function(id,callback){
      return db.query("select * from Role_Master where Role_id=?",[id],callback);
   },

    deleteRoleById: function (id, callback) {

     return   db.query("delete from Role_Master where Role_id=?", [id], callback);
    },

    updateRole:function(id,role,callback)
    {
      console.log(role.Role_name);
      console.log(id);
      return  db.query("update Role_Master set Role_name=? where Role_id=?",[role.Role_name,id],callback);
    },
    
    addRole:function(role,callback){
       return db.query("insert into Role_Master(Role_id,Role_name) values(?,?)",[null,role.Role_name],callback);
    }
    
};
module.exports = role;