const express = require("express");
const restaurantBookingController = require("../controllers/restaurantBookingController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(authController.protect, restaurantBookingController.getAllRestaurantBooking)
	.post(restaurantBookingController.createRestaurantBooking);
router
	.route("/:id")
	.get(restaurantBookingController.getRestaurantBooking)
	.patch(restaurantBookingController.updateRestaurantBooking)
	.delete(restaurantBookingController.deleteRestaurantBooking);

module.exports = router;
