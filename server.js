require("dotenv").config()
const express = require("express");
const randomstring = require("randomstring");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here

const option = {
  url: process.env.REACT_APP_MONGODB_URI || "mongodb://localhost/example_database",
  ttl: 14 * 24 * 60 * 60
}
const sessionStore  = new MongoStore(option)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: randomstring.generate(),
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.REACT_APP_MONGODB_URI || "mongodb://localhost/example_database" , { 
    useNewUrlParser: true 
});
console.log(process.env.REACT_APP_MONGODB_URI)
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
