const fs = require("fs");
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

// ////// user route handler function

exports.getAllUsers = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route to be defined later",
	});
};

exports.getUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route to be defined later",
	});
};
exports.createUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route to be defined later",
	});
};
exports.updateUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route to be defined later",
	});
};
exports.deleteUser = (req, res) => {
	res.status(500).json({
		status: "error",
		message: "route to be defined later",
	});
};