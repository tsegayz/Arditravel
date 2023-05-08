const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL
const citySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'a City must have a name'],
		unique: true,
		trim: true
	},
	travelMeans:String,
    tour: String,
    hotels: String,
	tourGuide: String,
	activity: String,
    
	summary: {
		type: String,
		required: true
	},
	restaurants: String,
    
	review: Number,
	imageCover: {
		type: String,
		required: true
	}
});

// THE MODEL

const City = mongoose.model("City", citySchema);

module.exports = City 