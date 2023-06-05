const express = require("express");
const restaurantBookingController = require("../controllers/restaurantBookingController");
const authController = require("../controllers/authController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(
		authController.protect,
		authController.restrictTo(1),
		restaurantBookingController.getAllRestaurantBooking
	)
	.post(
		authController.protect,
		restaurantBookingController.createRestaurantBooking
	);
router
	.route("/:id")
	.get(authController.protect, restaurantBookingController.getRestaurantBooking)
	.patch(
		authController.protect,
		restaurantBookingController.updateRestaurantBooking
	)
	.delete(
		authController.protect,
		restaurantBookingController.deleteRestaurantBooking
	);

module.exports = router;
