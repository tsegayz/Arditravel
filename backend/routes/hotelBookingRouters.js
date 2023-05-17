const express = require("express");
const authController = require("../controllers/authController");
const hotelBookingController = require("../controllers/hotelBookingController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(authController.protect, hotelBookingController.getAllHotelBooking)
	.post(hotelBookingController.createHotelBooking);
router
	.route("/:id")
	.get(hotelBookingController.getHotelBooking)
	.patch(hotelBookingController.updateHotelBooking)
	.delete(hotelBookingController.deleteHotelBooking);

module.exports = router;
