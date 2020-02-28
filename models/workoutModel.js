const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ActivitySchema = require('./activityModel');

const WorkoutSchema = new Schema({
  date: {
    type: Date
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an Workout name"
  },
  activities: [{ type: Schema.Types.String, ref: 'Activity' }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;