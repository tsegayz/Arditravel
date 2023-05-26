const mongoose = require("mongoose");

const tourGuideSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
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
	image: String,

});

// THE MODEL
const TourGuide = mongoose.model("TourGuide", tourGuideSchema);

module.exports = TourGuide;
