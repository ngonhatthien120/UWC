const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	userID: {
		type: String,
		required: [true, 'A task must have an userID'],
	},
	route: {
		type: String,
		required: [true, 'A task must have a route'],
	},
	trolley: {
		type: String,
	},
	note: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
