const mongoose = require("mongoose");

const travelBookingSchema = new mongoose.Schema({
	user_id: {
		type: Number,
		required: true,
	},
	travelmeans_id: {
		type: Number,
		required: true,
	},
	price: Number,
	rating: Number,
});

// THE MODEL
const TravelMeansBooking = mongoose.model(
	"TravelMeansBooking",
	travelBookingSchema
);

module.exports = TravelMeansBooking;
