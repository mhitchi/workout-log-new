let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/mongofitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  //name, duration, weight, reps, sets, distance
  {
    name: "workout01",
    day: Date.now,
    activity: [
      {
        exercise: "Bicep Curl",
        type: "weight",
        weight: 15,
        reps: 12,
        sets: 3
      },
      {
        exercise: "Lateral Pull",
        type: "resistance",
        weight: 45,
        reps: 12,
        sets: 3
      },
      {
        exercise: "Running",
        type: "cardio",
        incline: 3,
        duration: 30
      }
    ]
  },
  {
    name: "workout02",
    day: Date.now,
    activity: [
      {
        exercise: "Squat",
        type: "weight",
        weight: 100,
        reps: 12,
        sets: 3
      },
      {
        exercise: "Kettlebell Swing",
        type: "weight",
        weight: 30,
        reps: 12,
        sets: 3
      },
      {
        exercise: "Burpee",
        type: "plyo",
        reps: 10,
        sets: 3
      },
      {
        exercise: "Stairmaster",
        type: "cardio",
        duration: 30
      },
    ]
  }
];

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
