const router = require("express").Router();
const exampleRoutes = require("./examples");
const userRoutes = require("./user");

// User routes
router.use("/user", userRoutes);
// Book routes
router.use("/examples", exampleRoutes);

module.exports = router;