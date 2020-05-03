/*
  Jillian Biasotti, Aden Mariyappa, Joe ruiz
  4.7.20
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var courseSchema = require("mongoose").model("course").schema;
var passportLocalMongoose = require("passport-local-mongoose");

var usersSchema = new Schema(
  {
    fName: {
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    username: String,
    password: String,
    isAdvisor: {
      type: Boolean,
      required: true,
      default: true,
    },
    advisees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    schedule: {
      type: [courseSchema],
      required: false,
    },
  },
  { timestamps: true }
);
usersSchema.methods.getName = function () {
  return this.fName + " " + this.lName;
};
usersSchema.plugin(passportLocalMongoose);

var users = mongoose.model("User", usersSchema);

module.exports = users;
