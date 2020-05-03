/*
  Jillian Biasotti and Aden Mariyappa
  4.2.20
*/
var express = require("express");
var courseRouter = express.Router();
let courses = require("../models/courses");

//courseguide/courses - get only
courseRouter
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
    courses.find({}, (err, courses) => {
      if (err) throw err;
      res.json(courses);
    });
  })
  .post((req, res, next) => {
    courses.create(req.body, (err, course) => {
      if (err) throw err;

      console.log("course created");
      var id = course._id;
      res.end("Added the course with id:" + id);
    });
  });

//courses/courseId - get course by courseID, update course by ID
courseRouter
  .route("/:courseId")
  .get((req, res, next) => {
    courses.findById(req.params.courseId, (err, course) => {
      if (err) throw err;
      res.json(course);
    });
  })
  .put((req, res, next) => {
    courses.findOneAndUpdate(
      { _id: req.params.courseId },
      {
        $set: req.body,
      },
      {
        new: true,
      },
      (err, course) => {
        if (err) throw err; //propagate error
        res.json(course);
      }
    );
  });

module.exports = courseRouter;
