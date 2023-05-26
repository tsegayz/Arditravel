const mongoose = require("mongoose");

const locationTypeSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	country: String,
	region: {
		type: String,
		required: true,
	},
	zone: {
		type: String,
		required: true,
	},
	woreda: {
		type: String,
		required: true,
	},
	image: String,
	description: String
});

// THE MODEL
const LocationType = mongoose.model("LocationType", locationTypeSchema);

module.exports = LocationType;
