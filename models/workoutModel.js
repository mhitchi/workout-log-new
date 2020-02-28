const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ActivitySchema = require('./activityModel');

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an Workout name"
  },
  activity: [{ type: Schema.Types.String, ref: 'Activity' }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;