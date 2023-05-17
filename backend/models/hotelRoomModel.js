const mongoose = require("mongoose");

const hotelRoomSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

// THE MODEL
const HotelRoom = mongoose.model("HotelRoom", hotelRoomSchema);

module.exports = HotelRoom;
