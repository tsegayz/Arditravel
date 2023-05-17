const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String,
	latitude: {
		type: String,
		required: true,
	},
	longtiude: {
		type: String,
		required: true,
	},
	location_type_id: {
		type: Number,
		required: true,
	},
	parent_id: Number,
	review: Object,
});

// THE MODEL
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
