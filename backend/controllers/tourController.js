const Tour = require("./../models/tourModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all tours

exports.aliasTopTours = (req, res, next) => {
	(req.query.limit = "3"), (req.query.sort = "price");
	next();
};

exports.getAllTour = async (req, res) => {
	try {
		const features = new APIFeatures(Tour.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const tours = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: tours.length,
			data: {
				tours,
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
};

// a single tour using parameters in our case is id
exports.getTour = async (req, res) => {
	try {
		const tour = await Tour.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: tour,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new tour
exports.createTour = async (req, res) => {
	try {
		const newTour = await Tour.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				tour: newTour,
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
};

// Updating tour
exports.updateTour = async (req, res) => {
	try {
		const newTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				tour: newTour,
			},
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error updating",
			},
		});
	}
};

// Delete tour
exports.deleteTour = async (req, res) => {
	try {
		const newTour = await Tour.findByIdAndDelete(req.params.id);
		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error deleting",
			},
		});
	}
};
