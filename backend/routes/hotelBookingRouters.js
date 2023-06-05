const express = require("express");
const authController = require("../controllers/authController");
const hotelBookingController = require("../controllers/hotelBookingController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(authController.restrictTo(1), hotelBookingController.getAllHotelBooking)
	.post(authController.protect, hotelBookingController.createHotelBooking);
router
	.route("/:id")
	.get(authController.protect, hotelBookingController.getHotelBooking)
	.patch(authController.protect, hotelBookingController.updateHotelBooking)
	.delete(authController.protect, hotelBookingController.deleteHotelBooking);

module.exports = router;
