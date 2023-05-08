const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL
const activitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'a Activity must have a name'],
		unique: true,
		trim: true
	},
	location: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	type: String,
	duration: {
		type: Number,
		required: [true, 'an activity must have a duration'],
	},
	price: {
		type: Number,
		required: [true, 'an activity must have a price'],
	},
	review: Number,
	imageCover: {
		type: String,
		required: true
	}
});

// THE MODEL

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity 