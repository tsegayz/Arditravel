const express = require("express");
const activityController = require("../controllers/activityController");
const authController = require('../controllers/authController')


const router = express.Router();

// CHAINING different middlewares
router
	.route("/top-5-cheap")
	.get(activityController.aliasTopActivity, activityController.getAllActivity)

router
	.route("/")
	.get(activityController.getAllActivity)
	.post(authController.protect, authController.restrictTo(1), activityController.createActivity);
router
	.route("/:id")
	.get(activityController.getActivity)
	.patch(authController.protect, authController.restrictTo(1), activityController.updateActivity)
	.delete(authController.protect, authController.restrictTo(1), activityController.deleteActivity);

module.exports = router;
