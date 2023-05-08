const express = require("express");
const hotelRoomController = require("../controllers/hotelRoomController");

// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(hotelRoomController.getAllTour)
	.post(hotelRoomController.createTour);
router
	.route("/:id")
	.get(hotelRoomController.getTour)
	.patch(hotelRoomController.updateTour)
	.delete(hotelRoomController.deleteTour);

module.exports = router;
