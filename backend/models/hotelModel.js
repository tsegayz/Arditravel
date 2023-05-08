const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const hotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a Hotel must have a name"],
		unique: true,
		trim: true,
	},
	location: {
		type: String,
		required: true,
	},
	meals: String,
	summary: {
		type: String,
		required: true,
	},
	room: String,
	review: Number,
	checkIn: {
		type: Date,
		required: [true, "a Hotel must have a checkin date"],
	},
	checkIn: {
		type: Date,
		required: [true, "a Hotel must have a checkout date"],
	},
	serivces: {
		type: String,
		required: true,
	},
	imageCover: {
		type: String,
		required: true,
	},
});

// THE MODEL

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
