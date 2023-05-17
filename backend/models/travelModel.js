const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
	type: {
		type: String,
		required: [true, "a user must have a name"],
		trim: true,
	},
	location_id: {
		type: Number,
		required: true,
	},
});

// THE MODEL
const TravelMeans = mongoose.model("TravelMeans", travelSchema);

module.exports = TravelMeans;
