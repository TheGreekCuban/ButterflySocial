const db = require("../models");
const { validationResult } = require("express-validator");
// requiring bcrypt so password would be hash before getting into the database
const bcrypt = require('bcrypt');
const saltRounds = 10;
// Authentication package
const passport = require("passport");
// Defining methods for the userController
module.exports = {
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
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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
              console.log(dbUser)
              loginAfterSignUp(req, res, dbUser)
              res.json(dbUser)
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
            req.login(userId, function (error) {
                if (error) {
                    console.log(`err obj : ${error}`)
                    res.send(error)
                } else {
                    console.log(req.user.id)
                }
            })
}

passport.serializeUser(function (userId, done) {
  done(null, userId);
});

passport.deserializeUser(function (userId, done) {
  db.User.findOne({ where: userId }).then(function (user) {
      var userId = { id: user.get().id }
      done(null, userId);
  });
});