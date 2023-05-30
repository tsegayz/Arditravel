const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
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
	locationtype_id: {
		type: Number,
		required: true,
	},
	image: String,
});

// THE MODEL
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
