const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
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
	location_type_id: {
		type: Number,
		required: true,
	},
	parent_id: Number,
	review: Object,
	image: String
});

// THE MODEL
const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
