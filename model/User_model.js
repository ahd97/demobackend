var db = require('../dbconnection');
var user={
    getAllUser:function(callback){
        return db.query("select * from User_Master",callback);
    },

    getUserById:function(id,callback){
        return db.query("select * from User_Master where User_id=?",[id],callback);
    },
    deleteUserById:function(id,callback){
        return db.query("delete from User_Master where User_id=?",[id],callback);
    },
    updateUserById:function(id,user,callback){
        return db.query("update User_Master set Password=?,Security_q=?,Security_a=?,Ph_no=?,E_mail=?,First_name=?,Last_name=?,Address=? where User_id=?",[user.Password,user.Security_q,user.Security_a,user.Ph_no,user.E_mail,user.First_name,user.Last_name,user.Address,id],callback);
    },
    addUser:function(user,callback){
        return db.query("insert into User_Master(User_id,User_name,Password,Security_q,Security_a,Ph_no,E_mail,First_name,Last_name,Address) values(?,?,?,?,?,?,?,?,?,?)",[null,user.User_name,user.Password,user.Security_q,user.Security_a,user.Ph_no,user.E_mail,user.First_name,user.Last_name,user.Address],callback);
    }
};
module.exports=user;