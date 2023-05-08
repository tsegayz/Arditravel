const express = require("express");
const reviewController = require("../controllers/reviewController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(reviewController.getAllTour)
	.post(reviewController.createTour);
router
	.route("/:id")
	.get(reviewController.getTour)
	.patch(reviewController.updateTour)
	.delete(reviewController.deleteTour);

module.exports = router;
