const router = require("express").Router();
const streamRoutes = require("./streams");
const userRoutes = require("./user");
const searchRoutes = require("./search")
const filterRoutes = require("./filter");

// User routes
router.use("/user", userRoutes);
// Stream routes
router.use("/streams", streamRoutes);
// Search routes
router.use("/search", searchRoutes)
//Filter routes
router.use("/filter", filterRoutes);

module.exports = router;