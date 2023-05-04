const express = require("express");
const fs = require("fs");
const app = express();


// CRUD operations 

// middleware is a function that can modify the incoming request data
// in the middle of req and res
app.use(express.json());



const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/attractions.json`));

// getting all tours
const getAllTour = (req, res) => {
  res
  .status(200)
  .json({
      status: 'success',
      results: tours.length,
      data: {
          tours
      }
  });
}

// a single tour using parameters in our case is id
const getTour = (req, res) => {

  console.log(req.params)

  const id = Number(req.params.id);

  if ( id > tours.length) {
    res
    .status(404)
    .json({
        status: 'fail',
        message: " invalide id"
    })
  }

  const tour = tours.find(el => el.id = id)
    res
    .status(200)
    .json({
        status: 'success',
        data: tour
    });
}

// posting a json file onto the already created json file and persisting it in the json file the fictional DB
// since the data we posted can not be avaliable on the res content we need a middleware that can change the format so that we can access the content from the req

//// create opration
const createTour = (req, res) => {

  // create a new id variable to store each new element to be added to the json file
  const newId = tours[(tours.length - 1)].id + 1;
  const newTour = Object.assign( {id: newId}, req.body);

  // push the new added item to the tours list which was read from the json file before
  tours.push(newTour);

  // so to make sure that the item is written in the actual json file in the folder locally
  fs.writeFile(`${__dirname}/data/attractions.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      data: {
        status: "sucess",
        tour: newTour
      }
    })
  })
}

// Updating operation

const updateTour = (req, res) => {

  if ( req.params.id * 1  > tours.length) {
    return res
    .status(404)
    .json({
        status: 'fail',
        message: " invalide id"
  })
}

  res
  .status(200)
  .json({
    status: 'success',
    data:{
      tour: '<UPDATEDy...>'
    }
  })
}

// Delete operation

const deleteTour = (req, res) => {

  if ( req.params.id * 1  > tours.length) {
    return res
    .status(404)
    .json({
        status: 'fail',
        message: " invalide id"
    })
  }

  res
  .status(204)
  .json({
    status: 'success',
    data: null
  })
}


app.get("/api/v1/tours", getAllTour);
app.get("/api/v1/tours/:id", getTour);
app.post("/api/v1/tours", createTour);
app.patch("/api/v1/tours/:id", updateTour)
app.delete("/api/v1/tours/:id", deleteTour)

// we format the tour so that we can make changes only in some places we need

app.route("/api/v1/tours").get(getAllTour).post(createTour);
app.route("/api/v1/tours/:id").get(getTour).patch(updateTour).delete(deleteTour);

const port = 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}....`);
});
