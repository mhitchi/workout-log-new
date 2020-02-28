const express = require('express')
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// TODO GET /api/exercise get all exercises

// GET  "/"
// Calls controller which will return all activities for a specific Exercise
router.get("/", ExerciseCntrl.getAll);



module.exports = router