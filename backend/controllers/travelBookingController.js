const TravelBooking = require("./../models/travelBookingModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all TravelBooking
exports.getAllTravelBooking = async (req, res) => {
	try {
		const features = new APIFeatures(TravelBooking.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const travelBookings = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: travelBookings.length,
			data: {
				travelBookings,
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

// a single TravelBooking using parameters in our case is id
exports.getTravelBooking = async (req, res) => {
	try {
		const travelBooking = await TravelBooking.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: travelBooking,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new TravelBooking
exports.createTravelBooking = async (req, res) => {
	try {
		const newTravelBooking = await TravelBooking.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				travelBooking: newTravelBooking,
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

// Updating TravelBooking
exports.updateTravelBooking = async (req, res) => {
	try {
		const newTravelBooking = await TravelBooking.findByIdAndUpdate(
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
				travelBooking: newTravelBooking,
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

// Delete TravelBooking
exports.deleteTravelBooking = async (req, res) => {
	try {
		const newTravelBooking = await TravelBooking.findByIdAndDelete(
			req.params.id
		);
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
