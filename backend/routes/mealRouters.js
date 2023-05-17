const express = require("express");
const mealController = require("../controllers/mealController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(mealController.getAllMeal)
	.post(authController.protect, mealController.createMeal);
router
	.route("/:id")
	.get(mealController.getMeal)
	.patch(authController.protect, mealController.updateMeal)
	.delete(authController.protect, mealController.deleteMeal);

module.exports = router;
