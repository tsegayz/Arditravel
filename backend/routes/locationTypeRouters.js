const express = require("express");
const locationTypeController = require("../controllers/locationTypeController");
const authController = require("../controllers/authController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(locationTypeController.getAllLocationType)
	.post(authController.protect, authController.restrictTo(1),  locationTypeController.createLocationType);
router
	.route("/:id")
	.get(locationTypeController.getLocationType)
	.patch(authController.protect, authController.restrictTo(1), locationTypeController.updateLocationType)
	.delete(authController.protect, authController.restrictTo(1), locationTypeController.deleteLocationType);

module.exports = router;
