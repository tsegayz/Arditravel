const Meal = require("./../models/mealModel");
const APIFeatures = require("./../utils/apiFeatures");

// HANDLER FUNCTIONS
// getting all Meals
exports.getAllMeal = async (req, res) => {
	try {
		const features = new APIFeatures(Meal.find(), req.query)
			.filter()
			.sort()
			.limitFields()
			.pagination();
		// EXECUTING QUERY
		const meals = await features.query;

		// SENDING RESPONSE
		res.status(200).json({
			status: "success",
			responseTime: req.requestTime,
			results: meals.length,
			data: {
				meals,
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

// a single Meal using parameters in our case is id
exports.getMeal = async (req, res) => {
	try {
		const meal = await Meal.findById(req.params.id);
		res.status(200).json({
			status: "success",
			data: meal,
		});
	} catch (err) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}
};

//// create new Meal
exports.createMeal = async (req, res) => {
	try {
		const newMeal = await Meal.create(req.body);

		res.status(201).json({
			status: "sucess",
			data: {
				meal: newMeal,
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

// Updating Meal
exports.updateMeal = async (req, res) => {
	try {
		const newMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200).json({
			status: "success",
			data: {
				meal: newMeal,
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

// Delete Meal
exports.deleteMeal = async (req, res) => {
	try {
		const newMeal = await Meal.findByIdAndDelete(req.params.id);
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
