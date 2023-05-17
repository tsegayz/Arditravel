const HotelBooking = require("./../models/hotelBookingModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS


exports.getAllHotelBooking = async (req, res) => {
	try {
		const features = new APIFeatures(HotelBooking.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const hotelBooking = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: hotelBooking.length,
			data: {
				hotelBooking,
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

// a single HotelBooking using parameters in our case is id
exports.getHotelBooking = async (req, res) => {
	try {
		const hotelBooking = await HotelBooking.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: hotelBooking,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new HotelBooking
exports.createHotelBooking = async (req, res) => {
	try {
		const newHotelBooking = await HotelBooking.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				hotelBooking: newHotelBooking,
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

// Updating HotelBooking
exports.updateHotelBooking = async (req, res) => {
	try {
		const newHotelBooking = await HotelBooking.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				hotelBooking: newHotelBooking,
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

// Delete HotelBooking
exports.deleteHotelBooking = async (req, res) => {
	try {
		const newHotelBooking = await HotelBooking.findByIdAndDelete(req.params.id);
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
