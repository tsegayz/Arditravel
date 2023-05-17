const Resource = require("./../models/resourceModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all Resource


exports.getAllResource = async (req, res) => {
	try {
		const features = new APIFeatures(Resource.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const resources = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: resources.length,
			data: {
				resources,
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

// a single Resource using parameters in our case is id
exports.getResource = async (req, res) => {
	try {
		const resource = await Resource.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: resource,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new Resource
exports.createResource = async (req, res) => {
	try {
		const newResource = await Resource.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				resource: newResource,
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

// Updating Resource
exports.updateResource = async (req, res) => {
	try {
		const newResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				resource: newResource,
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

// Delete Resource
exports.deleteResource = async (req, res) => {
	try {
		const newResource = await Resource.findByIdAndDelete(req.params.id);
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
