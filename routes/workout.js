const express = require('express')
const router = express.Router()

const Exercise = require("../models/exerciseModel");

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// GET /api/workout get all workouts
// TODO note working
router.get("/api/workout", (req, res) => {
  Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

// POST /api/workout save selected workout
router.post("/api/workout", (req, res) => {
  Exercise.create(req.body)
    .then(exercise => {
      res.send(exercise)
    })
});

module.exports = router