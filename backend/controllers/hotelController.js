const Hotel = require("./../models/hotelModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS

// getting all Hotel

exports.getAllHotel = async (req, res) => {
	try {
		const features = new APIFeatures(Hotel.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const hotels = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: hotels.length,
			data: {
				hotels,
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

// a single Hotel using parameters in our case is id
exports.getHotel = async (req, res) => {
	try {
		const hotel = await Hotel.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: hotel,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new Hotel
exports.createHotel = async (req, res) => {
	try {
		const newHotel = await Hotel.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				hotel: newHotel,
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

// Updating Hotel
exports.updateHotel = async (req, res) => {
	try {
		const newHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				hotel: newHotel,
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

// Delete Hotel
exports.deleteHotel = async (req, res) => {
	try {
		const newHotel = await Hotel.findByIdAndDelete(req.params.id);
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
