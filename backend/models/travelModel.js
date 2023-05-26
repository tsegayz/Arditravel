const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	type: {
		type: String,
		required: [true, "a user must have a name"],
		trim: true,
	},
	location_id: {
		type: Number,
		required: true,
	},
	image: String,
});

// THE MODEL
const TravelMeans = mongoose.model("TravelMeans", travelSchema);

module.exports = TravelMeans;
