const mongoose = require("mongoose");

const resturantBookingSchema = new mongoose.Schema({
	checkin: {
		type: Date,
		required: true,
	},
	checkout: {
		type: Date,
		required: true,
	},
	user_id: {
		type: Number,
		required: [true, "the userId must be provided"],
	},
	restaurant_id: {
		type: Number,
		required: [true, "the restaurantId must be provided"],
	},
	review: Object,
});

// THE MODEL
const ResturantBooking = mongoose.model("ResturantBooking", resturantBookingSchema);

module.exports = ResturantBooking;
