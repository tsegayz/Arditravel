const mongoose = require("mongoose");

const tourGuideSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location_id: {
		type: Number,
		required: true,
	},
	featuring: String,
	rating: Number,
});

// THE MODEL
const TourGuide = mongoose.model("TourGuide", tourGuideSchema);

module.exports = TourGuide;
