const db = require("../models");
const { validationResult } = require("express-validator");
// requiring bcrypt so password would be hash before getting into the database
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Authentication package
const passport = require("passport");
// Defining methods for the userController
module.exports = {
  logUserIn: function(username, password, done) {
    console.log("LocalStrategy(function (username, password, done)");
    console.log(username);
    console.log(password);
    db.User
      .findOne( { email: username } )
      .then( user => {
      var userId = { id: user._id };
      var hash = user.password;
      if (!user) {
          return done(null, false, { message: "Incorrect username." });
      }
      bcrypt.compare(password, hash, function(err, res) {
          if (res === true) {
          return done(null, userId);
          }
          if (err || !user) {
          var error = new Error("Wrong email or password.");
          error.status = 401;
          return done(err);
          }
      });
    });
  },
  logout: function(req, res) {
    if (req.user) {
      req.logout()
      req.session.destroy(function (err) {
        console.log(err);
      });
      res.send({ msg: "logging out" })
    } else {
      res.send({ msg: "no user to log out"})
    }
  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ email: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOrCreate: function(req, res) {
    db.User
      .findOrCreate(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id).populate("streams")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, {$push: { streams: req.body.streamID}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
  
        return res.json(errors)
  
    } else {
        let bcryptPassword = req.body.password
        bcrypt.hash(bcryptPassword, saltRounds, (err, hash) => {
            if (err) {
                console.log(err)
                throw err;
            }
  
            let dataToBeStored = {
              email: req.body.email,
              username:req.body.username,
              password: hash
            }
            // Store hash in your password DB.
            db.User.create(dataToBeStored)
            .then( dbUser => {
              // console.log(dbUser)
              // loginAfterSignUp(req, res, dbUser)
              // res.json(dbUser)
              let userId = { id: dbUser._id }
                console.log(userId)
              req.login(userId, function (error) {
                console.log(`req.login(userId`)
                if (error) {
                      console.log(`err obj : ${error}`)
                      res.send(error)
                } else {
                    console.log(req.user.id)
                    res.json(dbUser)
                }
            })
            })
            .catch( (err) => {
                if (err) {
                    err = { errors: [{ msg: 'You currently have an account with us already please use that account to sign in thank you.' }] }
                    return res.status(422).json(err)
                }
            });
        });
  
    }
  
  }
};


const loginAfterSignUp = (req, res, dbUser) => {
  let userId = { id: dbUser._id }
    console.log(userId)
            req.login(userId, function (error) {
              console.log(`req.login(userId`)
                if (error) {
                    console.log(`err obj : ${error}`)
                    res.send(error)
                } else {
                    console.log(req.user.id)
                }
            })
}

passport.serializeUser(function (userId, done) {
  console.log("userId passport.serializeUser")
  console.log(userId)
  done(null, userId);
});

passport.deserializeUser(function (userId, done) {
  console.log("i got there")
  console.log(userId);
  db.User.findOne({ _id: userId }, "username", (err, user) => {
      // var userId = { id: user.get().id }
      console.log(userId)
      console.log("userId passport.deserializeUser")
      done(null, userId);
  });
});