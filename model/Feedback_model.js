var db = require('../dbconnection');
var feedback = {
    getAllFeedback: function (callback) {

      return  db.query("SELECT feedback.Feedback_id,user_master.User_name,feedback.Description FROM feedback,user_master WHERE feedback.User_id=user_master.User_id", callback);
    },

    getFeedbackById:function(id,callback){
      return db.query("SELECT * FROM feedback WHERE feedback_id=?",[id],callback);
   },

    deleteFeedbackById: function (id, callback) {

     return   db.query("delete from Feedback where Feedback_id=?", [id], callback);
    },

    updateFeedback:function(id,feedback,callback)
    {
      console.log(feedback.Description);
      console.log(id);
      return  db.query("update Feedback set Description=? where Feedback_id=?",[feedback.Description,id],callback);
    },
    
    addfeedback:function(feedback,callback){
       return db.query("insert into Feedback(Feedback_id,Description) values(?,?)",[null,feedback.Description],callback);
    }
    
};
module.exports = feedback;