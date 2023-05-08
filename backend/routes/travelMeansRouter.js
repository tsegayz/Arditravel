const express = require("express");
const travelMeansController = require("../controllers/travelMeansController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(travelMeansController.getAllTour)
	.post(travelMeansController.createTour);
router
	.route("/:id")
	.get(travelMeansController.getTour)
	.patch(travelMeansController.updateTour)
	.delete(travelMeansController.deleteTour);

module.exports = router;
