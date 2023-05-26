const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
	_id: { type: Number, required: true },
	name: {
		type: String,
		required: [true, "a activity must have a name"],
	},
    description: String,
    location_id: {
		type:Number,
		required: true
	},
    rating: Number,
    price: Number,
	image:String
});

// THE MODEL
const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
