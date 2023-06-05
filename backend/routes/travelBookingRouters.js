const express = require("express");
const travelBooking = require("../controllers/travelBookingController");
const authController = require("../controllers/authController");

const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(authController.protect, authController.restrictTo(1), travelBooking.getAllTravelBooking)
	.post(authController.protect, travelBooking.createTravelBooking);
router
	.route("/:id")
	.get(authController.protect, travelBooking.getTravelBooking)
	.patch(authController.protect, travelBooking.updateTravelBooking)
	.delete(authController.protect, travelBooking.deleteTravelBooking);

module.exports = router;
