const router = require("express").Router();
const streamRoutes = require("./streams");
const userRoutes = require("./user");

// User routes
router.use("/user", userRoutes);
// Stream routes
router.use("/streams", streamRoutes);

module.exports = router;