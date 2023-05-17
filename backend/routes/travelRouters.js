const express = require("express");
const travel = require("../controllers/travelController");
const authController = require('../controllers/authController')


const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(travel.getAllTravel)
	.post(authController.protect, travel.createTravel);
router
	.route("/:id")
	.get(travel.getTravel)
	.patch(authController.protect, travel.updateTravel)
	.delete(authController.protect, travel.deleteTravel);

module.exports = router;
