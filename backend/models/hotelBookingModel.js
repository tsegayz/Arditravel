const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const hotelBookingSchema = new mongoose.Schema(
  {
    booking_id: { type: Number, unique: true }, // Custom integer ID field
    user_id: {
      type: Number,
      required: [true, "the userId must be provided"],
    },
    hotel_id: {
      type: Number,
      required: [true, "the hotelId must be provided"],
    },
    room_id: {
      type: Number,
      required: [true, "the hotelRoomId must be provided"],
    },
    checkin_date: {
      type: Date,
      required: true,
    },
    checkout_date: {
      type: Date,
      required: true,
    },
    status: Boolean,
    review: Object,
  },
  { autoCreate: false }
);

// hotelBookingSchema.plugin(AutoIncrement, { inc_field: "booking_id" });

hotelBookingSchema.pre("save", async function (next) {
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
const HotelBooking = mongoose.model("HotelBooking", hotelBookingSchema);

module.exports = HotelBooking;
