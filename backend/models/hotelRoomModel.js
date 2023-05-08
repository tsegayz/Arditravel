const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const hotelRoomSchema = new mongoose.Schema({
	totalRoom: String,
	type: {
		type: String,
		required: true,
	},
    price: Number,
	bedNumber: {
		type: Number,
		required: true,
	},
	imageCover: {
		type: String,
		required: true
	}

});

// THE MODEL

const HotelRoom = mongoose.model("HotelRoom", hotelRoomSchema);

module.exports = HotelRoom;
