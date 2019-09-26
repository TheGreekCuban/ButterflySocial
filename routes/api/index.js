const router = require("express").Router();
const streamRoutes = require("./streams");
const userRoutes = require("./user");
const searchRoutes = require("./search");
const messageRoutes = require("./messages");

// User routes
router.use("/user", userRoutes);
// Stream routes
router.use("/streams", streamRoutes);
// Search routes
router.use("/search", searchRoutes);
// Message routes
router.use("/messages", messageRoutes);

module.exports = router;
