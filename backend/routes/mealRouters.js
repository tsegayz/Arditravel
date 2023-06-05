const express = require("express");
const mealController = require("../controllers/mealController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(mealController.getAllMeal)
	.post(authController.protect, authController.restrictTo(1), mealController.createMeal);
router
	.route("/:id")
	.get(mealController.getMeal)
	.patch(authController.protect, authController.restrictTo(1),  mealController.updateMeal)
	.delete(authController.protect, authController.restrictTo(1), mealController.deleteMeal);

module.exports = router;
