const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	user_id: {
		type: Number,
		required: [true, "the userId must be provided"],
	},
	hotel_id: {
		type: Number,
		required: [true, "the hotelId must be provided"],
	},
	room_id: {
		type: Number,
		required: [true, "the hotelRoomId must be provided"],
	},
	checkin_date: {
		type: Date,
		required: true,
	},
	checkout_date: {
		type: Date,
		required: true,
	},
	status: Boolean,
	review: Object,

});

// THE MODEL
const HotelBooking = mongoose.model("HotelBooking", hotelBookingSchema);

module.exports = HotelBooking;
