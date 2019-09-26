const router = require("express").Router();
const streamRoutes = require("./streams");
const userRoutes = require("./user");
const searchRoutes = require("./search")

// User routes
router.use("/user", userRoutes);
// Stream routes
router.use("/streams", streamRoutes);
// Search routes
router.use("/search", searchRoutes)

module.exports = router;