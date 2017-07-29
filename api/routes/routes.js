// function takes an express app as parameter
module.exports = function(app) {
	var actorController = require('../controllers/actorController');
	var movieController = require('../controllers/movieController');
	var userController = require('../controllers/userController');

	// get all actors 
	app.get('/api/actors', function(req, res) {
		actorController.getActors(function(err, actors) {
			if (err) {
				throw err;
			}

			res.json(actors);
		});
	});

	// get actor by id
	app.get('/api/actors/:_id', function(req, res) {
		var _id = req.params._id;
		actorController.getActorById(_id, function(err, actor) {
			if (err) {
				throw err;
			}

			res.json(actor);
		});
	});

	// add new actor
	app.post('/api/actors', function(req, res) {
		var actor = req.body;
		actorController.createActor(actor, function(err, actor) {
			if (err) {
				throw err;
			}

			res.json(actor);
		});
	});

	// update actor by id
	app.put('/api/actors/:_id', function(req, res){
		var _id = req.params._id;
		var actor = req.body;
		actorController.updateActorById(_id, actor, {}, function(err, actor){
			if (err) {
				throw err;
			}

			res.json(actor);
		}); 
	}); 

	// delete actor by id
	app.delete('/api/actors/:_id', function(req, res) {
		var _id = req.params._id;
		actorController.removeActorById(_id, function(err, actor) {
			if (err) {
				throw err;
			}

			res.json(actor);
		});
	});	

	//
	//_________________________________________________________________
	//
	//

	//get all movies
	app.get('/api/movies', function(req, res) {
		movieController.getMovies(function(err, movies) {
			if (err) {
				throw err;
			}

			res.json(movies);
		});
	});

	// get movie by id
	app.get('/api/movies/:_id', function(req, res) {
		var _id = req.params._id;
		movieController.getMovieById(_id, function(err, movie) {
			if (err) {
				throw err;
			}

			res.json(movie);
		});
	});

	// add new movie
	app.post('/api/movies', function(req, res) {
		var movie = req.body;
		movieController.createMovie(movie, function(err, movie) {
			if (err) {
				throw err;
			}

			res.json(movie);
		});
	});

	// update movie by id
	app.put('/api/movies/:_id', function(req, res) {
		var _id = req.params._id;
		var movie = req.body;
		movieController.updateMovieById(_id, movie, {}, function(err, movie) {
			if (err) {
				throw err;
			}

			res.json(movie);
		});
	});

	// delete movie by id
	app.delete('/api/movies/:_id', function(req, res) {
		var _id = req.params._id;
		movieController.removeMovieById(_id, function(err, movie) {
			if (err) {
				throw err;
			}

			res.json(movie);
		});
	});

	//
	//_________________________________________________________________
	//
	//

	// get all users
	app.get('/api/users', function(req, res) {
		userController.getUsers(function(err, users) {
			if (err) {
				throw err;
			}

			res.json(users);
		});
	});

	// get user by id
	app.get('/api/users/:_id', function(req, res) {
		var _id = req.params._id;
		userController.getUserById(_id, function(err, user) {
			if (err) {
				throw err;
			}

			res.json(user);
		});
	});

	// add new user
	app.post('/api/users', function(req, res) {
		var user = req.body;
		userController.createUser(user, function(err, user) {
			if (err) {
				throw err;
			}

			res.json(user);
		});
	});

	// update user by id
	app.put('/api/users/:_id', function(req, res) {
		var _id = req.params._id;
		var user = req.body;
		userController.updateUserById(_id, user, {}, function(err, user) {
			if (err) {
				throw err;
			}

			res.json(user);
		});
	});


	// delete user by id
	app.delete('/api/users/:_id', function(req, res) {
		var _id = req.params._id;
		userController.removeUserById(_id, function(err, user) {
			if (err) {
				throw err;
			}

			res.json(user);
 		});
	});







}