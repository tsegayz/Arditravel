const express = require("express");
const hotelController = require("../controllers/hotelController");
const authController = require("../controllers/authController");

const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(hotelController.getAllHotel)
	.post(authController.protect, hotelController.createHotel);
router
	.route("/:id")
	.get(hotelController.getHotel)
	.patch(authController.protect, hotelController.updateHotel)
	.delete(authController.protect, hotelController.deleteHotel);

module.exports = router;
