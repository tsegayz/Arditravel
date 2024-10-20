const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const resturantBookingSchema = new mongoose.Schema(
  {
    booking_id: { type: Number, unique: true }, // Custom integer ID field
    name: String,
    date: {
      type: Date,
      required: true,
    },
    checkin: {
      type: String,
      required: true,
    },
    checkout: {
      type: String,
      required: true,
    },
    user_id: {
      type: Number,
      required: [true, "the userId must be provided"],
    },
    restaurant_id: {
      type: Number,
      required: [true, "the restaurantId must be provided"],
    },
    phonenumber: Number,
    review: Object,
  },
  { autoCreate: false }
);

// Debugging: Check if plugin is being applied multiple times
console.log("Applying mongoose-sequence plugin...");
resturantBookingSchema.plugin(AutoIncrement, { inc_field: "booking_id" });
console.log("mongoose-sequence plugin applied.");

resturantBookingSchema.pre("save", async function (next) {
  if (this.isNew) {
    const highestId = await this.constructor
      .aggregate()
      .group({
        _id: null,
        maxId: { $max: "$_id" },
      })
      .project({
        _id: { $add: ["$maxId", 1] },
      });

    if (highestId.length > 0) {
      this._id = highestId[0]._id;
    } else {
      this._id = 1; // If no documents exist, start with 1
    }
  }

  next();
});

// THE MODEL
const ResturantBooking = mongoose.model(
  "ResturantBooking",
  resturantBookingSchema
);

module.exports = ResturantBooking;
