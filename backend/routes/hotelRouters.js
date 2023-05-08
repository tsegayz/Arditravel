const express = require("express");
const hotelController = require("../controllers/hotelController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(hotelController.getAllTour)
	.post(hotelController.createTour);
router
	.route("/:id")
	.get(hotelController.getTour)
	.patch(hotelController.updateTour)
	.delete(hotelController.deleteTour);

module.exports = router;
