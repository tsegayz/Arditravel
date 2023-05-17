const express = require("express");
const restaurantController = require("../controllers/restaurantController");
const authController = require("../controllers/authController");

const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(restaurantController.getAllRestaurant)
	.post(authController.protect, restaurantController.createRestaurant);
router
	.route("/:id")
	.get(restaurantController.getRestaurant)
	.patch(authController.protect, restaurantController.updateRestaurant)
	.delete(authController.protect, restaurantController.deleteRestaurant);

module.exports = router;
