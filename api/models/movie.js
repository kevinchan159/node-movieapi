var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		maximum: 5,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	actors: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Actor'
	}]
});

var Movie = module.exports = mongoose.model('Movie', movieSchema);