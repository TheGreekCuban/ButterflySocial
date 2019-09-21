const mongoose = require("mongoose");
const db = require("../models");
const streamSeeds = require("../seed.json")

// This file empties the Examples collection and inserts the examples below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/example_database"
);

const exampleSeed = [
  {
    body:
      "Test",
    date: new Date(Date.now())
  }
];

db.Stream
  .remove({})
  .then(() => db.Stream.collection.insertMany(streamSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
