const router = require("express").Router();
const exampleRoutes = require("./examples");

// Book routes
router.use("/examples", exampleRoutes);

module.exports = router;