const express = require("express");
const cityController = require("../controllers/cityController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(cityController.getAllTour)
router
	.route("/:id")
	.get(cityController.getTour)
	.patch(cityController.updateTour)
	.delete(cityController.deleteTour);

module.exports = router;
