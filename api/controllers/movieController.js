var mongoose = require('mongoose');
Movie = mongoose.model('Movie');

// get all movies
module.exports.getMovies = function(callback, limit) {
	Movie.find(callback).limit(limit);
};	

// get movie by id
module.exports.getMovieById = function(id, callback) {
	Movie.findById(id, callback);
};

// create new movie
module.exports.createMovie = function(movie, callback) {
	Movie.create(movie, callback);
};

// update movie by id
module.exports.updateMovieById = function(id, movie, options, callback) {
	var query = {_id: id};
	var update = {
		name: movie.name,
		rating: movie.rating,
		description: movie.description,
		actors: movie.actors
	};
	Movie.findOneAndUpdate(query, update, options, callback);
};

// delete movie
module.exports.removeMovieById = function(id, callback) {
	var query = {_id: id};
	Movie.remove(query, callback);
};















