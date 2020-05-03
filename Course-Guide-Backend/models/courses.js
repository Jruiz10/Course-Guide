/*
  Jillian Biasotti, Aden Mariyappa, Joe ruiz
  3.22.20
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var courseSchema = new Schema({
  courseID: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    min: 0,
    max: 4
  }
});

var courses = mongoose.model("course", courseSchema);

module.exports = courses;
