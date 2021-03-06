const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const dbconfig = require("./db/config")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongofitness", dbconfig.settings);
mongoose.Promise = global.Promise;

// Use express router to register routes as middleware
app.use('/api/activity', require('./routes/activity'))
app.use('/api/exercise', require('./routes/exercise'))
app.use('/api/workout', require('./routes/workout'));

// STUDENTS: REGISTER ROUTES TO HANDLE WORKOUT AND EXERCISE API CALLS



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
