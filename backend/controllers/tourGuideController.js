const TourGuide = require("./../models/tourGuideModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all TourGuides
exports.getAllTourGuide = async (req, res) => {
	try {
		const features = new APIFeatures(TourGuide.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const tourGuides = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: tourGuides.length,
			data: {
				tourGuides,
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

// a single TourGuide using parameters in our case is id
exports.getTourGuide = async (req, res) => {
	try {
		const tourGuide = await TourGuide.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: tourGuide,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new touTourGuider
exports.createTourGuide = async (req, res) => {
	try {
		const newTourGuide = await TourGuide.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				tourGuide: newTourGuide,
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

// Updating TourGuide
exports.updateTourGuide = async (req, res) => {
	try {
		const newTourGuide = await TourGuide.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				tourGuide: newTourGuide,
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

// Delete TourGuide
exports.deleteTourGuide = async (req, res) => {
	try {
		const newTourGuide = await TourGuide.findByIdAndDelete(req.params.id);
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
