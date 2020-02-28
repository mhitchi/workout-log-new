const Activity = require("../models/activityModel");

const ActivityCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all Activitys is needed
  getAll(req, res){
    Activity.find({})
      .then(data => {
        console.log(data)
        res.json(data)
      });
  },

  //TODO add activity
  makeActivity(req, res){
    Activity.create({})
      .then(data => {
        console.log(data);
        res.json(data)
      })
  }
}


module.exports = ActivityCntrl;