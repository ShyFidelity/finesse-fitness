//create a route based on api.js (front end)

const router = require("express").Router();
const {Workout} = require("../models/Workout.js")




router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then( dbWorkout => {
        res.json(dbWorkout);
    })
    .catch (err => {
        res.status(400).json(err)
    })
})


















module.exports = router;