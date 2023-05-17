const express = require("express");
const locationTypeController = require("../controllers/locationTypeController");
const authController = require("../controllers/authController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(locationTypeController.getAllLocationType)
	.post(authController.protect, locationTypeController.createLocationType);
router
	.route("/:id")
	.get(locationTypeController.getLocationType)
	.patch(authController.protect, locationTypeController.updateLocationType)
	.delete(authController.protect, locationTypeController.deleteLocationType);

module.exports = router;
