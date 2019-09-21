const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
// const passport = require("passport");

router.get('/', (req, res, next) => {
    console.log("-----user!-----");
    console.log(req.user);
    if(req.user) {
      res.json({ user: req.user })
    } else {
      res.json({ user: null })
    }
  });

  module.exports = router;