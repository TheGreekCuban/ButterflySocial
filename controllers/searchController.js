// Defining methods for the searchController
const db = require("../models");
 

module.exports = {
  findAll: function(req, res) {
    db.Search
      .find({})
      .then(dbModel => { console.log("DB Model: ", dbModel)
        return res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
};
 
 
/*
findById: function(req, res) {
    db.Example
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Example
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Example
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Example
*/