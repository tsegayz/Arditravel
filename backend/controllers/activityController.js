const Activity = require("./../models/activityModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all activity
exports.aliasTopActivity = (req, res, next) => {
	(req.query.limit = "3"), (req.query.sort = "price");
	next();
};

exports.getAllActivity = async (req, res) => {
	try {
		const features = new APIFeatures(Activity.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const activities = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: activities.length,
			data: {
				activities,
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

// a single activity using parameters in our case is id
exports.getActivity = async (req, res) => {
	try {
		const activity = await Activity.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: activity,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new activity
exports.createActivity = async (req, res) => {
	try {
		const newActivity = await Activity.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				activity: newActivity,
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

// Updating activity
exports.updateActivity = async (req, res) => {
	try {
		const newActivity = await Activity.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);
		res.status(200).json({
			status: "success",
			data: {
				activity: newActivity,
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

// Delete activity
exports.deleteActivity = async (req, res) => {
	try {
		const newActivity = await Activity.findByIdAndDelete(req.params.id);
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
