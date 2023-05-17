const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a meal must have a name"],
	},
    price: {
        type: Number,
        required: true
    },
    restaurant_id: {
        type: Number,
        required: true
    }
});

// THE MODEL
const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
