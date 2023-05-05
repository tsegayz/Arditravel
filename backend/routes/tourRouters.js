const express = require("express");
const tourController = require("../controllers/tourController");

// ////// TOURS router
const router = express.Router();

// PARAM MIDDLEWARE
router.param("id", tourController.checkID);

// CHAINING different middlewares
router
	.route("/")
	.get(tourController.getAllTour)
	.post( tourController.checkBody, tourController.createTour);
router
	.route("/:id")
	.get(tourController.getTour)
	.patch(tourController.updateTour)
	.delete(tourController.deleteTour);

module.exports = router;
