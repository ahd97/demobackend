var db = require('../dbconnection');
var city = {
    getAllCities: function (callback) {

      return  db.query("select * from City", callback);
    },

    getCityById:function(id,callback){
      return db.query("select * from City where City_id=?",[id],callback);
   },

    deleteCityById: function (id, callback) {

     return   db.query("delete from City where City_id=?", [id], callback);
    },

    updateCity:function(id,city,callback)
    {
      console.log(city.City_name);
      console.log(id);
      return  db.query("update City set City_name=? where City_id=?",[city.City_name,id],callback);
    },
    
    addCity:function(city,callback){
       return db.query("insert into City (City_id,City_name) values(?,?)",[null,city.City_name],callback);
    }
    
};
module.exports = city;