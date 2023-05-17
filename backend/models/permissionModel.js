const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "a role must have a name"],
	},
	description: String
});

// THE MODEL
const Permission = mongoose.model("PermissionSchema", permissionSchema);

module.exports = Permission;
