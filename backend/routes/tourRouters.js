const express = require("express");
const tourController = require("../controllers/tourController");
const authController = require('./../controllers/authController')

// ////// TOURS router
const router = express.Router();

// PARAM MIDDLEWARE
// router.param("id", tourController.checkID);

// CHAINING different middlewares
router
	.route("/top-5-cheap")
	.get(tourController.aliasTopTours, tourController.getAllTour)
router
	.route("/")
	.get(authController.protect, tourController.getAllTour)
	.post(tourController.createTour);
router
	.route("/:id")
	.get(tourController.getTour)
	.patch(tourController.updateTour)
	.delete(tourController.deleteTour);

module.exports = router;
