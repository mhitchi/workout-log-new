const express = require('express')
const router = express.Router()

const ActivityCntrl = require('../controllers/activityCntrl');

// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ActivityCntrl.getAll);


module.exports = router