const express = require('express')
const router = express.Router()

const Workout = require("../models/workoutModel");

const WorkoutCntrl = require('../controllers/workoutCntrl');

// GET /api/workout get all workouts
// TODO note working
router.get("/", WorkoutCntrl.getAll);

// POST /api/workout save selected workout
router.post("/", WorkoutCntrl.makeWorkout);

module.exports = router