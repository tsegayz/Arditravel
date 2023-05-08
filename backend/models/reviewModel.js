const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const reviewSchema = new mongoose.Schema({
    summary: {
		type: String,
		required: true
	}, 	
    like: {
		type: Number,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
});

// THE MODEL

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
