const mongoose = require("mongoose");

// CRARING A MODEL AND SCHEMA FOR THE TOUR
// SCHEMA THAT CAN BE USED TO CREATE A MODEL
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'a user must have a name'],
		unique: true,
		trim: true
	},
    password: {
        type: String,
        required: [true, 'a user must have an password']
    },
    email: {
        type: email,
        required: [true, 'a user must have an email']
    },
    role:{
        type:String,
        required: [true, 'a user must have an role']
    },
	imageCover: {
		type: String,
		required: true
	}
});

// THE MODEL
const User = mongoose.model("User", userSchema);

module.exports = User 