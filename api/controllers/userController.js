var mongoose = require('mongoose');
User = mongoose.model('User');

// get all users
module.exports.getUsers = function(callback, limit) {
	User.find(callback).limit(limit);
};

// get user by id
module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

// create new user
module.exports.createUser = function(user, callback) {
	User.create(user, callback);
};

// update user by id
module.exports.updateUserById = function(id, user, options, callback) {
	var query = {_id: id};
	var update = {
		username: user.username,
		password: user.password,
		movies: user.movies
	};
	User.findOneAndUpdate(query, update, options, callback);
};

// delete user by id
module.exports.removeUserById = function(id, callback) {
	var query = {_id: id};
	User.remove(query, callback);
};

