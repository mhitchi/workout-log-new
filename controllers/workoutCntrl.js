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

  makeWorkout({body}, res){
    Workout.create(body)
    .then(workout => {
      res.json(workout)
    })
  }
}


module.exports = WorkoutCntrl;