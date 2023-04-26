const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
	.route('/')
	.get(
		authController.protect,
		authController.restrictTo('backOffice'),
		taskController.getAllTask
	)
	.post(
		authController.protect,
		authController.restrictTo('backOffice'),
		taskController.createTask
	);
router
	.route('/:id')
	.get(authController.protect, taskController.getTask)
	.patch(
		authController.protect,
		authController.restrictTo('backOffice'),
		taskController.updateTask
	)
	.delete(
		authController.protect,
		authController.restrictTo('backOffice'),
		taskController.deleteTask
	);

module.exports = router;
