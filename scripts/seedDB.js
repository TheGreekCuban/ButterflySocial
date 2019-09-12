const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Examples collection and inserts the examples below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/examples_database"
);

const exampleSeed = [
  {
    body:
      "Test",
    date: new Date(Date.now())
  }
];

db.Example
  .remove({})
  .then(() => db.Example.collection.insertMany(exampleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
