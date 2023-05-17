const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String,
	location_id: {
		type: Number,
		required: true,
	},
});

// THE MODEL
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
