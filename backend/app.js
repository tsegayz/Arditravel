const express = require("express");
const app = express();

// app.use(morgan('dev'))
app.use(express.json());

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

// we used it as a middleware to attach it to the main route which is also called mounting
app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

module.exports = app;