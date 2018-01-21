var db = require('../dbconnection');
var cart = {
    getAllCart: function (callback) {

      return  db.query("SELECT cart.Cart_id,user_master.User_name FROM cart,user_master WHERE cart.User_id=user_master.User_id", callback);
    },

    getCartById:function(id,callback){
      return db.query("SELECT * FROM cart WHERE Cart_id=?",[id],callback);
   },

    deleteCartById: function (id, callback) {

     return   db.query("delete from Cart where Cart_id=?", [id], callback);
    },

    updateCart:function(id,cart,callback)
    {
      console.log(cart.User_id);
      console.log(id);
      return  db.query("update Cart set User_id=? where Cart_id=?",[cart.User_id,id],callback);
    },
    
    addCart:function(cart,callback){
       return db.query("insert into Cart(Cart_id,User_id) values(?,?)",[null,cart.User_id],callback);
    }
    
};
module.exports = cart;