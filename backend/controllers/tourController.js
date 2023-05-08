const Tour = require('./../models/tourModel');

// HANDLER FUNCTIONS
// getting all tours
exports.getAllTour = async (req, res) => {
	try{
		const tours = await Tour.find()
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: tours.length,
			data: {
				tours,
			},
		});		
	}
	catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "problem fetchong data"
			},
		});	
	}
};

// a single tour using parameters in our case is id
exports.getTour = async (req, res) => {

	try{
		const tour = await Tour.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: tour,
		});		
	}
	catch (err) {
		res
		.status(404)
		.json({
			status: 'fail',
			message: " invalide id"
		})
	}
};

//// create new tour
exports.createTour = async (req, res) => {

	try{
		const newTour = await Tour.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				tour: newTour,
			},
		});		
	}
	catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "invlaid data set"
			},
		});	
	}

};

// Updating tour
exports.updateTour = async (req, res) => {
	try{
		const newTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		})
		res.status(200).json({
			status: "success",
			data: {
				tour: newTour,
			},
		});		
	}
	catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error updating"
			},
		});	
	}
};

// Delete tour
exports.deleteTour = async (req, res) => {
	try{
		const newTour = await Tour.findByIdAndDelete(req.params.id)
		res.status(204).json({
			status: "success",
			data: null
		});		
	}
	catch (err) {
		res.status(404).json({
			data: {
				status: "fail",
				message: "error deleting"
			},
		});	
	}
};
