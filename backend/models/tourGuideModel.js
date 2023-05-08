const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const tourGuide = new mongoose.Schema({
    name: {
		type: String,
		required: [true, "a tourGuide must have a name"],
		unique: true,
		trim: true,
	},
    featuring: {
		type: String,
		required: true
	}, 	
    summary: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
});

// THE MODEL

const TourGuide = mongoose.model("TourGuide", tourGuide);

module.exports = TourGuide;
