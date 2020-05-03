/*
  Jillian Biasotti, Joe Ruiz, and Aden Mariyappa
  4.8.20
*/
var express = require("express");
var usersRouter = express.Router();
let users = require("../models/users");
var Verify = require("./verify");
var passport = require("passport");
const bcrypt = require("bcrypt");
//Users/ : get and post

usersRouter.get("/logout", (req, res) => {
  //req.session.reset();
  req.logout();
  console.log("trying to log out");
  res.status(200).json({
    status: "Bye!",
  });
});

usersRouter
  .route("/")
  .get(
    /* Verify.verifyOrdinaryUser, */ (req, res, next) => {
      users.find({}, (err, users) => {
        if (err) throw err;
        res.json(users);
      });
    }
  )
  .post((req, res, next) => {
    console.log("post being used");
    users.create(req.body, (err, user) => {
      if (err) throw err;
      res.json(user);
      console.log("user created");
    });
  });
// anybody who logs in, student or advisor
usersRouter.route("/:userId").get((req, res, next) => {
  users.findById(req.params.userId, (err, user) => {
    if (err) throw err;
    res.json(user);
  });
});
//Users/userID/schedule = get student schedule
//need to add update capability for student schedule
usersRouter
  .route("/:userId/schedule")
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
    users.findById(req.params.userId, (err, student) => {
      if (err) throw err;
      res.json(student.schedule);
    });
  });

//Users/:userID/advisees - get list of advisees
//users/:userID/advisees -- all advisees for a given advisor
usersRouter.route("/:userId/Advisees").get((req, res, next) => {
  users
    .findById(req.params.userId)
    .populate("advisees")
    .exec((err, advisor) => {
      console.log(advisor.advisees);
      if (err) console.log(err);

      res.json(advisor.advisees);
    });
});
//users/:userID/advisees/:studentID - get one advisee only
usersRouter.route("/:userId/Advisees/:studentId").get((req, res, next) => {
  console.log(req.url);
  users
    .findById(req.params.userId)
    .populate("advisees")
    .exec((err, advisor) => {
      console.log(advisor.advisees);
      if (err) throw err;
      const student = advisor.advisees.find((a) => {
        console.log(a._id + " " + req.params.studentId);
        return a._id.toString() === req.params.studentId;
      });
      console.log(student);
      res.json(student);
    });
});

//Users/:userId/Advisees/:studentIs/schedule: get & update advisee schedule
usersRouter
  .route("/:userId/Advisees/:studentId/schedule")
  .get((req, res, next) => {
    users
      .findById(req.params.userId)
      .populate("advisees")
      .exec((err, advisor) => {
        console.log(advisor.advisees);
        if (err) throw err;
        const student = advisor.advisees.find((a) => {
          console.log(a._id + " " + req.params.studentId);
          return a._id.toString() === req.params.studentId;
        });
        console.log(student.schedule);
        res.json(student.schedule);
      });
  }); /* ** NEED TO FIX THIS 
usersRouter
  .route("/:userId/Advisees/:studentId/schedule/:courseId")
  .put((req, res, next) => {
    users.findOneAndUpdate(
      { _id: req.params.courseId },
      {
        $set: req.body,
      },
      {
        new: true,
      },
      (err, course) => {
        if (err) throw err; //propagate error
        console.log("updated course " + req.params.courseId);
        res.json(course);
      }
    );
  }); */
/* .put((req, res, next) => { NEED TO FIX THIS
    users.update(
      { _id: req.params.studentId },
      {
        $set: req.body, //assuming body contains the update
      },
      {
        new: true,
      },
      (err, student) => {
        if (err) throw err; //propagate error
        res.json(student.schedule);
      }
    );
  }) */

usersRouter.post("/register", async function (req, res) {
  users.register(
    new users({
      username: req.body.username,
      fName: req.body.fName,
      lName: req.body.lName,
    }),
    req.body.password,
    function (err, user) {
      if (err) return res.status(500).json({ err: err });

      passport.authenticate("local")(req, res, function () {
        var token = Verify.getToken(user);

        return res
          .status(200)
          .header("x-access-token", token)
          .header("access-control-expose-headers", "x-access-token")
          .json({ status: "Registration Successful!" });
      });
    }
  );
});
// 4- user login
usersRouter.post("/login", (req, res, next) => {
  //req.body will have username and password
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (!user) {
      console.log(user);
      console.log("no user");
      return res.status(401).json({ err: info });
    }
    req.logIn(user, function (err) {
      if (err) return res.status(500).json({ err: "Could not log in user" });

      console.log("User in users: ", user);

      var token = Verify.getToken(user);

      res.status(200);
      res.send(token);
    });
  })(req, res, next);
});

// 5- implementing logout

module.exports = usersRouter;
