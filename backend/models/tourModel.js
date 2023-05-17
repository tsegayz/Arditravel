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
		// required: true,
	},
	travelMeans: {
		type: String,
	},
	summary: {
		type: String,
		required: true,
	},
	type: {
		type: String,
	},
	rating: {
		type: Number,
	},
	price: {
		type:Number,
		required: [true, "a tour must have a name"],
	},
	imageCover: {
		type: String,
		required: true,
	},
});

// THE MODEL

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
