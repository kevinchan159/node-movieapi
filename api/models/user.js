var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	movies: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Movie',
	}
	]
});

var User = module.exports = mongoose.model('User', userSchema);