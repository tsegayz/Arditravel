const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const tourSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a tour must have a name"],
		unique: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
	},
	travelMeans: String,
	summary: {
		type: String,
		required: true,
	},
	type: String,
	review: Number,
	imageCover: {
		type: String,
		required: true,
	},
});

// THE MODEL

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
