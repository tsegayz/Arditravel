const LocationType = require("./../models/locationTypeModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all LocationType
exports.getAllLocationType = async (req, res) => {
	try {
		const features = new APIFeatures(LocationType.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const locationTypes = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: locationTypes.length,
			data: {
				locationTypes,
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

// a single LocationType using parameters in our case is id
exports.getLocationType = async (req, res) => {
	try {
		const locationType = await LocationType.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: locationType,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new LocationType
exports.createLocationType = async (req, res) => {
	try {
		const newLocationType = await LocationType.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				locationType: newLocationType,
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

// Updating LocationType
exports.updateLocationType = async (req, res) => {
	try {
		const newLocationType = await LocationType.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				locationType: newLocationType,
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

// Delete LocationType
exports.deleteLocationType = async (req, res) => {
	try {
		const newLocationType = await LocationType.findByIdAndDelete(req.params.id);
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
