const mongoose = require("mongoose");

const hotelRoomSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	type: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	hotel_id: {
		type: Number,
		required: [true, "the hotelId must be provided"],
	},
	image: String,

});

// THE MODEL
const HotelRoom = mongoose.model("HotelRoom", hotelRoomSchema);

module.exports = HotelRoom;
