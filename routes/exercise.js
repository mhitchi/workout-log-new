const express = require('express')
const router = express.Router()

const Exercise = require("../models/exerciseModel");

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// TODO GET /api/exercise get all exercises

// GET  "/""
// Calls controller which will return all activities for a specific Exercise
router.get("/", ExerciseCntrl.getAll);

//get main page
router.get("/", (req, res) => {
  res.sendFile("./public/index.html");
})

//get all exercises 
// TODO not working?
router.get("/api/exercise", (req, res) => {
  Exercise.find({})
    .then(dbExercise => {
      res.json(dbExercise);
    })
    .catch(err => {
      res.json(err);
    });
});

//post exercise
//TODO not working?
router.post("/api/exercise", (req, res) => {
  Exercise.create(req.body)
    .then(exercise => {
      res.send(exercise)
    })

  // Exercise.create(req.body)
  //   .then(dbExercise => {
  //     res.json(dbExercise);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   });
});

// //add exercise to plan
// //POST `/api/exercise/${id}`
// //TODO get id
// router.put("/api/exercise/:id?", (req, res) => {
//   //if cardio, get name, duration, distance
//   if( req.body.type === "cardio" ) {
//     Exercise.create(
//       {
//         name: req.body.name,
//         type: req.body.type,
//         duration: req.body.duration,
//         distance: req.body.distance,
//       }
//     )
//       .then(dbExercise => {
//         res.json(dbExercise);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//     //if resistance, get name, weight, sets, reps, duration
//   } else {
//     Exercise.create(
//       {
//         name: req.body.name,
//         type: req.body.type,
//         weight: req.body.weight,
//         sets: req.body.sets,
//         reps: req.body.reps,
//         duration: req.body.resistance-duration,
//       }
//     )
//       .then(dbExercise => {
//         res.json(dbExercise);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   }
// });


module.exports = router