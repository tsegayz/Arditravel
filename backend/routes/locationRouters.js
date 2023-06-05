const express = require("express");
const locationController = require("../controllers/locationController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(locationController.getAllLocation)
	.post(authController.protect, authController.restrictTo(1), locationController.createLocation);
router
	.route("/:id")
	.get(locationController.getLocation)
	.patch(authController.protect, authController.restrictTo(1), locationController.updateLocation)
	.delete(authController.protect, authController.restrictTo(1), locationController.deleteLocation);

module.exports = router;
