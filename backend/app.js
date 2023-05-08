const express = require("express");
const morgan = require('morgan')
const app = express();

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(express.json());

const tourRouter = require('./routes/tourRouters');
const userRouter = require('./routes/userRouters');

// we used it as a middleware to attach it to the main route which is also called mounting
app.use("/api/v1/tours", tourRouter)
app.use("/api/v1/users", userRouter)

module.exports = app;