const express = require("express");
const resourceController = require("../controllers/resourceController");
const authController = require('../controllers/authController')


// ////// TOURS router
const router = express.Router();

// CHAINING different middlewares
router
	.route("/")
	.get(resourceController.getAllResource)
	.post(authController.protect, resourceController.createResource);
router
	.route("/:id")
	.patch(authController.protect, resourceController.updateResource)
	.delete(authController.protect, resourceController.deleteResource);

module.exports = router;
