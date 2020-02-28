const Workout = require("../models/workoutModel.js");

const WorkoutCntrl = {
  // This is called (when needed) from the route page when a 
  // TODO listing of all workouts is needed
  getAll(req, res){
    Workout.find({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
  },

  //make one workout
  makeWorkout({body}, res){
    Workout.create(body, (err, res) => {
      console.log(res);
      res.json(res)
    })
    .catch(err => {
      console.log(err);
      res.json(err)
    });
  },

  //TODO get one by id
  getWorkout(req, res) {
    Workout.findById({})
    .then(data => {
      res.json(data);
    });
  }
}


module.exports = WorkoutCntrl;