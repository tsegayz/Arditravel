const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const travelMeans = new mongoose.Schema({
    name: {
		type: String,
		required: [true, "a travelMeans must have a name"],
		unique: true,
		trim: true,
	},
    price: Number,
    type: {
        type: String,
        required: true
    },	
    distance: {
		type: Number,
		required: true,
	}
});

// THE MODEL

const TravelMeans = mongoose.model("TravelMeans", travelMeans);

module.exports = TravelMeans;
