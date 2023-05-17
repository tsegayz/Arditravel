const express = require("express");
const hotelRoomController = require("../controllers/hotelRoomController");
const authController = require("../controllers/authController");

const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(hotelRoomController.getAllHotelRoom)
	.post(authController.protect, hotelRoomController.createHotelRoom);
router
	.route("/:id")
	.get(hotelRoomController.getHotelRoom)
	.patch(authController.protect, hotelRoomController.updateHotelRoom)
	.delete(authController.protect, hotelRoomController.deleteHotelRoom);

module.exports = router;
