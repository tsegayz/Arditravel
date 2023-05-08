const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const mealsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    price: Number,
	summary: {
		type: String,
		required: true,
	},
	imageCover: {
		type: String,
		required: true
	}

});

// THE MODEL

const Meals = mongoose.model("Meals", mealsSchema);

module.exports = Meals;
