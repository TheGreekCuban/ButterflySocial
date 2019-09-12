const router = require("express").Router();
const booksController = require("../../controllers/examplesController");

// Matches with "/api/examples"
// router.route("/")
//   .get(examplesController.findAll)
//   .post(examplesController.create);

// Matches with "/api/examples/:id"
// router
//   .route("/:id")
//   .get(examplesController.findById)
//   .put(examplesController.update)
//   .delete(examplesController.remove);

module.exports = router;
