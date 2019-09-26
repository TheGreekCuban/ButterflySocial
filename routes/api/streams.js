const router = require("express").Router();
const streamsController = require("../../controllers/streamsController");

/*
Create "Stream.js" page in "client/src/pages" with the following functionality:

Perform GET request to "/api/streams" when component mounts
Loop through response and render elements as cards (use CSS or materialize framework)
cards should display name of stream, creator of stream, and description of stream
cards should include a link to save
Perform a PUT request to "/api/streams" when save link on card is clicked
PUT request should save user_id to stream document, and stream_id to user document
*/

//Matches with "/api/streams"
// router.route("/:id")
//     .get(streamsController.findById);

// Matches with "/api/examples/:id"
// router
//   .route("/:id")
//   .get(examplesController.findById)
//   .put(examplesController.update)
//   .delete(examplesController.remove);
router.route("/")
  .post((req, res) => res.send("hey"));
router.route("/:id")
  .post(streamsController.remove)
  .put(streamsController.addMessage)
  .get(streamsController.findMessages)


// client sends req -> server via route -> delegates req to controller -> then goes to database, or do something

module.exports = router;

// do a post request that takes in the stream ID and remove it from the backend --> so when this finishes you will
// send info back to the front end that  its done
