const express = require("express");
const travelBooking = require("../controllers/travelBookingController");
const authController = require("../controllers/authController");

const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(authController.protect, travelBooking.getAllTravelBooking)
	.post(travelBooking.createTravelBooking);
router
	.route("/:id")
	.get(travelBooking.getTravelBooking)
	.patch(travelBooking.updateTravelBooking)
	.delete(travelBooking.deleteTravelBooking);

module.exports = router;
