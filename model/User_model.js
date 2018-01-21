var db = require('../dbconnection');
var user={
    getAllUser:function(callback){
        return db.query("SELECT user_master.User_id,user_master.User_name,user_master.Password,user_master.Security_q,user_master.Security_a,user_master.Ph_no,user_master.E_mail,user_master.First_name,user_master.Last_name,user_master.Address,user_master.DOB,user_master.Created_date,user_master.Modified_date,user_master.Creted_by,user_master.Modified_by,role_master.Role_name FROM user_master,role_master WHERE user_master.Role_id=role_master.Role_id",callback);
    },

    getUserById:function(id,callback){
        return db.query("SELECT * FROM user_master WHERE User_id=?",[id],callback);
    },
    deleteUserById:function(id,callback){
        return db.query("delete from User_Master where User_id=?",[id],callback);
    },
    updateUserById:function(id,user,callback){
        return db.query("update User_Master set Password=?,Security_q=?,Security_a=?,Ph_no=?,E_mail=?,First_name=?,Last_name=?,Address=? where User_id=?",[user.Password,user.Security_q,user.Security_a,user.Ph_no,user.E_mail,user.First_name,user.Last_name,user.Address,id],callback);
    },
    addUser:function(user,callback){
        return db.query("insert into User_Master (User_id,User_name,Password,Security_q,Security_a,Ph_no,E_mail,First_name,Last_name,Address,DOB,Role_id) values(?,?,?,?,?,?,?,?,?,?,?,?)",[null,user.User_name,user.Password,user.Security_q,user.Security_a,user.Ph_no,user.E_mail,user.First_name,user.Last_name,user.Address,user.DOB,user.Role_id],callback);
    }
};
module.exports=user;