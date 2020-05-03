/*
  Jillian Biasotti,Aden Mariyappa, Joe Ruiz
  3.22.20
*/
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");

var courses = require("./models/courses");
var users = require("./models/users");
var usersRouter = require("./routes/users");
var coursesRouter = require("./routes/courses");
/**
 * Create an instance of Config, Passport and passport-local
 */
var config = require("./config");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

/**
 * Create a connection to mongoDB using mongoose
 */
var mongoose = require("mongoose");
var assert = require("assert");

// Connect using mongoose
mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
//open a connection and get a db handler
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());

app.use("/users", usersRouter);
app.use("/courses", coursesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
  //if error is not 404, sends the object to the next error
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
