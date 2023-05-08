const express = require("express");
const tourGuideController = require("../controllers/tourGuideController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(tourGuideController.getAllTour)
	.post(tourGuideController.createTour);
router
	.route("/:id")
	.get(tourGuideController.getTour)
	.patch(tourGuideController.updateTour)
	.delete(tourGuideController.deleteTour);

module.exports = router;
