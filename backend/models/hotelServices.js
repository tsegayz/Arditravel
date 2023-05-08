const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL

const hotelServicesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: Number,
	summary: {
		type: String,
		required: true,
	},
});

// THE MODEL

const HotelServices = mongoose.model("HotelServices", hotelServicesSchema);

module.exports = HotelServices;
