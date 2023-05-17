const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String,
	latitude: {
		type: String,
		required: true,
	},
	longitude: {
		type: String,
		required: true,
	},
	location_id: {
		type: Number,
		required: true,
	},
});

// THE MODEL
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
