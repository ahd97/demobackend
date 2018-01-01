var mysql=require('mysql');
var cnn=mysql.createPool({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'online_laminates'

});
module.exports=cnn;