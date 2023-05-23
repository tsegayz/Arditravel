const Location = require("./../models/locationModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all Location

exports.getAllLocation = async (req, res) => {
	try {
		const features = new APIFeatures(Location.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const locations = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: locations.length,
			data: {
				locations,
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

// a single Location using parameters in our case is id
exports.getLocation = async (req, res) => {
	try {
		const location = await Location.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: location,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new Location
exports.createLocation = async (req, res) => {
	try {
		const newLocation = await Location.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				location: newLocation,
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

// Updating Location
exports.updateLocation = async (req, res) => {
	try {
		const newLocation = await Location.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				location: newLocation,
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

// Delete Location
exports.deleteLocation = async (req, res) => {
	try {
		const newLocation = await Location.findByIdAndDelete(req.params.id);
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
