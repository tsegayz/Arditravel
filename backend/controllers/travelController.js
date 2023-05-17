const Travel = require("./../models/travelModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all Travel
exports.getAllTravel = async (req, res) => {
	try {
		const features = new APIFeatures(Travel.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const travels = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: travels.length,
			data: {
				travels,
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

// a single Travel using parameters in our case is id
exports.getTravel = async (req, res) => {
	try {
		const travel = await Travel.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: travel,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new Travel
exports.createTravel = async (req, res) => {
	try {
		const newTravel = await Travel.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				travel: newTravel,
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

// Updating Travel
exports.updateTravel = async (req, res) => {
	try {
		const newTravel = await Travel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				travel: newTravel,
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

// Delete Travel
exports.deleteTravel = async (req, res) => {
	try {
		const newTravel = await Travel.findByIdAndDelete(req.params.id);
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
