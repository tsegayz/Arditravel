const HotelRoom = require("./../models/hotelRoomModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all HotelRoom 
exports.getAllHotelRoom = async (req, res) => {
	try {
		const features = new APIFeatures(HotelRoom.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			// .pagination();
		// EXECUTING QUERY
		const hotelRooms = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: hotelRooms.length,
			data: {
				hotelRooms,
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

// a single HotelRoom using parameters in our case is id
exports.getHotelRoom = async (req, res) => {
	try {
		const hotelRoom = await HotelRoom.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: hotelRoom,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new HotelRoom
exports.createHotelRoom = async (req, res) => {
	try {
		const newHotelRoom = await HotelRoom.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				hotelRoom: newHotelRoom,
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

// Updating HotelRoom
exports.updateHotelRoom = async (req, res) => {
	try {
		const newHotelRoom = await HotelRoom.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				hotelRoom: newHotelRoom,
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

// Delete HotelRoom
exports.deleteHotelRoom = async (req, res) => {
	try {
		const newHotelRoom = await HotelRoom.findByIdAndDelete(req.params.id);
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
