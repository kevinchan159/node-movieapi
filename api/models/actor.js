var mongoose = require('mongoose');

var actorSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	}
});

var Actor = module.exports = mongoose.model('Actor', actorSchema);