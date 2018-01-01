var db = require('../dbconnection');
var feedback = {
    getAllFeedback: function (callback) {

      return  db.query("select * from Feedback", callback);
    },

    getFeedbackById:function(id,callback){
      return db.query("select * from Feedback where Feedback_id=?",[id],callback);
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