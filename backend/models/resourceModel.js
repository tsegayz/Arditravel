const mongoose = require('mongoose');

const resourceModel = new mongoose.Schema({
	_id: { type: Number, required: true },
    name:{
        type: String,
		required: [true, "a role must have a name"],
    },
    url:{
        type: String,
		required: [true, "a role must have a name"],
    }
});

const Resource = mongoose.model("Resource", resourceModel);

module.exports = Resource;