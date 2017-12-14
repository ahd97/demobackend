var mysql=require('mysql');
var cnn=mysql.createPool({
    
    host:'localhost',
    user:'root',
    password:'aayush@123',
    database:'database'

});
module.exports=cnn;