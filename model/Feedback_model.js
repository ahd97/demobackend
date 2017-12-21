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

    updateFeedback:function(id,feedbak,callback)
    {
      console.log(feedback.Desc);
      console.log(id);
      return  db.query("update Feedback set Desc=? where Feedback_id=?",[feedback.Desc,id],callback);
    },
    
    addfeedback:function(feedback,callback){
       return db.query("insert into Feedback (Feedback_id,Desc) values(?,?)",[feedback.Feedback_id,feedback.Desc],callback);
    }
    
};
module.exports = feedback;