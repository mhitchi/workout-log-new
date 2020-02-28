const express = require('express')
const router = express.Router()

const WorkoutCntrl = require('../controllers/workoutCntrl');

// GET / get all workouts
router.get("/", WorkoutCntrl.getAll);

// POST / save selected workout
router.post("/", WorkoutCntrl.makeWorkout);

// GET /:id? get workout by id
router.get("/:id?", WorkoutCntrl.getWorkout);

module.exports = router