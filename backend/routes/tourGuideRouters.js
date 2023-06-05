const express = require("express");
const tourGuide = require("../controllers/tourGuideController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(tourGuide.getAllTourGuide)
	.post(authController.protect, authController.restrictTo(1), tourGuide.createTourGuide);
router
	.route("/:id")
	.get(tourGuide.getTourGuide)
	.patch(authController.protect, authController.restrictTo(1), tourGuide.updateTourGuide)
	.delete(authController.protect, authController.restrictTo(1), tourGuide.deleteTourGuide);

module.exports = router;
