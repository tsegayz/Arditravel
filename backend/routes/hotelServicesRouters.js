const express = require("express");
const hotelServicesController = require("../controllers/hotelServicesController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(hotelServicesController.getAllTour)
	.post(hotelServicesController.createTour);
router
	.route("/:id")
	.get(hotelServicesController.getTour)
	.patch(hotelServicesController.updateTour)
	.delete(hotelServicesController.deleteTour);

module.exports = router;
