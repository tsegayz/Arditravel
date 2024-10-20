const RestaurantBooking = require("./../models/restaurantBookingModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all RestaurantBookings

exports.getAllRestaurantBooking = async (req, res) => {
	try {
		const features = new APIFeatures(RestaurantBooking.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const restaurantBooking = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: restaurantBooking.length,
			data: {
				restaurantBooking,
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

// a single RestaurantBooking using parameters in our case is id
exports.getRestaurantBooking = async (req, res) => {
	try {
		const restaurantBooking = await RestaurantBooking.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: restaurantBooking,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new RestaurantBooking
exports.createRestaurantBooking = async (req, res) => {
	try {
		const newRestaurantBooking = await RestaurantBooking.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				restaurantBooking: newRestaurantBooking,
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

// Updating RestaurantBooking
exports.updateRestaurantBooking = async (req, res) => {
	try {
		const newRestaurantBooking = await RestaurantBooking.findByIdAndUpdate(
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
				restaurantBooking: newRestaurantBooking,
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

// Delete RestaurantBooking
exports.deleteRestaurantBooking = async (req, res) => {
	try {
		const newRestaurantBooking = await RestaurantBooking.findByIdAndDelete(
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
