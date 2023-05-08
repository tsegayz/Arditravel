const express = require("express");
const mealsController = require("../controllers/mealsController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(mealsController.getAllTour)
	.post(mealsController.createTour);
router
	.route("/:id")
	.get(mealsController.getTour)
	.patch(mealsController.updateTour)
	.delete(mealsController.deleteTour);

module.exports = router;
