const mongoose = require("mongoose");

const locationTypeSchema = new mongoose.Schema({
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
	}
});

// THE MODEL
const LocationType = mongoose.model("LocationType", locationTypeSchema);

module.exports = LocationType;
