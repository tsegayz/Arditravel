const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String,
	location_id: {
		type: Number,
		required: true,
	},
	image:String,
	rating: Number

});

// THE MODEL
const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
