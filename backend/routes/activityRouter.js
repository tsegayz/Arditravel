const express = require("express");
const activityController = require("../controllers/activityController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(activityController.getAllTour)
	.post(activityController.createTour);
router
	.route("/:id")
	.get(activityController.getTour)
	.patch(activityController.updateTour)
	.delete(activityController.deleteTour);

module.exports = router;
