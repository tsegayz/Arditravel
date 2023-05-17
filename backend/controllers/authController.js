const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
//// create new user

const signinToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};
exports.signup = async (req, res, next) => {
	try {
		const newUser = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			passwordConfirm: req.body.passwordConfirm,
		});

		// automatically loggin when the user opens the page by sending the token to the user

		const token = signinToken(newUser._id);

		res.status(201).json({
			status: "sucess",
			token,
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: err,
			},
		});
	}
	next();
};

/// logging in user

exports.login = async (req, res, next) => {
	const { email, password } = req.body;

	// first check if the email and password exist in the db
	if (!email || !password) {
		return res.status(400).json({
			data: {
				status: "please provide a valid email and password",
			},
		});
	}

	// check if the user exists and the password is correct
	const user = await User.findOne({ email }).select("+password");

	// checking if the user password is the correct one using the function in the model
	if (!user || !(await user.correctPassword(password, user.password))) {
		return res.status(401).json({
			data: {
				status: "incorrect email or password",
			},
		});
	}

	// if correct then send the token to user
	const token = signinToken(user._id);
	res.status(200).json({
		status: "sucess",
		token,
	});
	next();
};

// a middleware to protect the resources that are accessed by users
// if all the conditions below are satisfied then the user gets access to resources
exports.protect = async (req, res, next) => {
	// 1) getting token and chech if it's there
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		token = req.headers.authorization.split(" ")[1];
	}

	console.log(token);

	if (!token) {
		return res.status(401).json({
			status: "fail",
			message: "you are not logged in! please log in to get access",
		});
	}

	// 2) verify token - if the token data is manipulated and if it has expired
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

	// 3) check if the user still exists
	const currentUser = await User.findById(decoded.id);
	console.log(currentUser);
	if (!currentUser) {
		return res.status(401).json({
			data: {
				status: "fail",
				message: "the user belonging to this token no longer exist",
			},
		});
	}

	// 4) check if the user changed password after the token was issued
	if (currentUser.changedPasswordAfter(decoded.iat)) {
		return res.status(401).json({
			data: {
				status: "fail",
				message: "user recently changed password",
			},
		});
	}
	req.user = currentUser;
	next();
};