const express = require("express");
const restaurant = require("../controllers/restaurant");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(restaurant.getAllTour)
	.post(restaurant.createTour);
router
	.route("/:id")
	.get(restaurant.getTour)
	.patch(restaurant.updateTour)
	.delete(restaurant.deleteTour);

module.exports = router;
