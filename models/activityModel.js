const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = require('./exerciseModel');

const ActivitySchema = new Schema({
  name: { type: Schema.Types.String, ref: 'Exercise' },
  weight: Number,
  sets: Number,
  reps: Number,
  duration: Number,
  incline: Number
});

const Activity = mongoose.model("Activity", ActivitySchema);

module.exports = Activity;