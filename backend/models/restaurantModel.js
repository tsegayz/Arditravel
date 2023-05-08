const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL
const restaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'a restaurant must have a name'],
		unique: true,
		trim: true
	},
    location:{
        type: String,
        required: [true, "the location for the restaurant must be specified"]
    },
	summary: {
		type: String,
		required: true
	},    
	review: Number,
    meals:String,
	imageCover: {
		type: String,
		required: true
	}
});

// THE MODEL

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant 