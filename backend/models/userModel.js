const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "please provide your name"],
		trim: true,
	},
	password: {
		type: String,
		required: [true, "please provide a password"],
		minlength: 8,
		select: false,
	},
	email: {
		type: String,
		required: [true, "please provide your email"],
		unique: true,
		lowerCase: true,
		validate: [validator.isEmail, "please provide a valid email"],
	},
	imageCover: String,
	passwordConfirm: {
		type: String,
		required: [true, "please provide a password"],
		// wors on create and save
		validate: {
			validator: function (el) {
				return el === this.password;
			},
			message: "the password doesn't match",
		},
	},
	passwordChangedAt: Date,
	active: Boolean,
});

// password encryption
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, 12);

	// we only need to persist the password in the data base not the confirm password too
	this.passwordConfirm = undefined;
	next();
});

// a function to check the users password is valid by comparing the hashed password when user logs in
userSchema.methods.correctPassword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

// a function to check if the users password is changed after the token was issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	if (this.passwordChangedAt) {
		const changedTimeStamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);
		return JWTTimestamp < passwordChangedAt;
	}
	// means there was no change of the password after the token is issued
	return false;
};

// THE MODEL
const User = mongoose.model("User", userSchema);

module.exports = User;
