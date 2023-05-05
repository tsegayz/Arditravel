const fs = require("fs");

const tours = JSON.parse(
	fs.readFileSync(`${__dirname}/../data/attractions.json`)
);

// ////// tour route handler function

// a function that checks if the inserted id value is valid
exports.checkID = (req, res, next, val) => {
	console.log(`tour id is ${val}`)

	if (req.params.id > tours.length) {
		res.status(404).json({
			status: "fail",
			message: " invalide id",
		});
	}

};

// checking a post for specific parameters existence
exports.checkBody = ( (req, res, next) => {

	if ( !req.body.name || !req.body.price ) {
		console.log(req.body)
		return res.status(404).json({
			status: "fail",
			message: " bad request",
		});
	}
	next();

})

// getting all tours
exports.getAllTour = (req, res) => {
	res.status(200).json({
		status: "success",
		responseTime: req.requestTime,
		results: tours.length,
		data: {
			tours,
		},
	});
};

// a single tour using parameters in our case is id
exports.getTour = (req, res) => {

	console.log(req.params);
	const id = req.params.id * 1;
	const tour = tours.find((el) => (el.id = id));
	res.status(200).json({
		status: "success",
		data: tour,
	});
};

//// create new tour
exports.createTour = (req, res) => {
	// create a new id variable to store each new element to be added to the json file
	const newId = tours[tours.length - 1].id + 1;
	const newTour = Object.assign({ id: newId }, req.body);

	// push the new added item to the tours list which was read from the json file before
	tours.push(newTour);

	// so to make sure that the item is written in the actual json file in the folder locally
	fs.writeFile(
		`${__dirname}/../data/attractions.json`,
		JSON.stringify(tours),
		(err) => {
			res.status(201).json({
				data: {
					status: "sucess",
					tour: newTour,
				},
			});
		}
	);
};

// Updating tour
exports.updateTour = (req, res) => {
	res.status(200).json({
		status: "success",
		data: {
			tour: "<UPDATEDy...>",
		},
	});
};

// Delete tour
exports.deleteTour = (req, res) => {
	res.status(204).json({
		status: "success",
		data: null,
	});
};
