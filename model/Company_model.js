var db = require('../dbconnection');
var company = {
    getAllCompany: function (callback) {

      return  db.query("SELECT company.Company_id,company.Company_name,company.Address,company.E_mail,company.Ph_no,city.City_name FROM company,city WHERE company.City_id=city.City_id", callback);
    },

    getCompanyById:function(id,callback){
      return db.query("SELECT company.Company_id,company.Company_name,company.Address,company.E_mail,company.Ph_no,city.City_name FROM company,city WHERE company.City_id=city.City_id and Company_id=?",[id],callback);
   },

    deleteCompanyById: function (id, callback) {

     return   db.query("delete from Company where Company_id=?", [id], callback);
    },

    updateCompany:function(id,company,callback)
    {
      console.log(company.Company_name);
      console.log(id);
      return  db.query("update Company set Company_name=?,Address=?,Ph_no=? where Company_id=?",[company.Company_name,company.Address,company.Phone_no,id],callback);
    },
    
    addCompany:function(company,callback){
       return db.query("insert into Company(Company_id,Company_name,Address,Ph_no) values(?,?,?,?)",[null,company.Company_name,company.Address,company.Ph_no],callback);
    }
    
};
module.exports = company;