const express = require("express");
const morgan = require("morgan");
const path = require('path');
const app = express();

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

const userRouter = require("./routes/userRouters");
const activityRouter = require("./routes/activityRouters");
const hotelRouter = require("./routes/hotelRouters");
const hotelBookingRouter = require("./routes/hotelBookingRouters");
const hotelRoomRouter = require("./routes/hotelRoomRouters");
const locationRouter = require("./routes/locationRouters");
const locationTypeRouter = require("./routes/locationTypeRouters");
const mealRouter = require("./routes/mealRouters");
const permissionRouter = require("./routes/permissionRouters");
const resourceRouter = require("./routes/resourceRouters");
const restaurantRouter = require("./routes/restaurantsRouters");
const restaurantBookingRouter = require("./routes/restaurantBookingRouters");
const roleRouter = require("./routes/roleRouters");
const tourGuideRouter = require("./routes/tourGuideRouters");
const travelRouter = require("./routes/travelRouters");
const travelBookingRouter = require("./routes/travelBookingRouters");

// we used it as a middleware to attach it to the main route which is also called mounting
app.use("/api/v1/users", userRouter);
app.use("/api/v1/activities", activityRouter);
app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/hotelBooking", hotelBookingRouter);
app.use("/api/v1/hotelRoom", hotelRoomRouter);
app.use("/api/v1/locations", locationRouter);
app.use("/api/v1/locationtype", locationTypeRouter);
app.use("/api/v1/meals", mealRouter);
app.use("/api/v1/permissions", permissionRouter);
app.use("/api/v1/resources", resourceRouter);
app.use("/api/v1/restaurants", restaurantRouter);
app.use("/api/v1/restaurantBooking", restaurantBookingRouter);
app.use("/api/v1/roles", roleRouter);
app.use("/api/v1/tourGuides", tourGuideRouter);
app.use("/api/v1/travel", travelRouter);
app.use("/api/v1/travelBooking", travelBookingRouter);

// read operation

module.exports = app;
