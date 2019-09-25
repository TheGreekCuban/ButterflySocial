const router = require("express").Router();
const searchController = require("../../controllers/searchController");

//Matches with "/api/filter"
router.route("/").get(searchController.findFiltered);

module.exports = router;