const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String,
});

// THE MODEL
const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
