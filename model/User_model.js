var db = require('../dbconnection');
var user={
    getAllUser:function(callback){
        return db.query("select * from User_Master",callback);
    },

    getUserById:function(id,callback){
        return db.query("select * from User_Master where User_id=?",[id],callback);
    },
    deleteUserById:function(id,callback){
        return db.quer("delete from User_Master where User_id=?",[id],callback);
    },
    updateUserById:function(id,user,callback){
        return db.query("update User_Master set First_name=? where User_id=?",[user.First_name,id],callback);
    },
    addUser:function(user,callback){
        return db.query("insert into User_Master values(?,?)",[user.User_id,user.First_name],callback);
    }
};
module.exports=user;