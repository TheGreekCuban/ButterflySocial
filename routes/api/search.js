const router = require("express").Router();
const searchController = require("../../controllers/searchController");
 
/*
Create "Stream.js" page in "client/src/pages" with the following functionality:
 
Perform GET request to "/api/streams" when component mounts
Loop through response and render elements as cards (use vanilla CSS or materialize framework)
cards should display name of stream, creator of stream, and description of stream
cards should include a link to save
Perform a PUT request to "/api/streams" when save link on card is clicked
PUT request should save user_id to stream document, and stream_id to user document
*/
 
 
//Matches with "/api/search"
router.route("/")
   .get(searchController.findAll)
 
//Matches with "/api/search/:id"
// router.route("/:id")
//   .get(searchController.findById)
//   .put(searchController.update)
//   .delete(searchController.remove);
 
module.exports = router;
