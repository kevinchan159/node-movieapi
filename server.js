var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// import models
Actor = require('./api/models/actor');
Movie = require('./api/models/movie');
User = require('./api/models/user');


// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// connect to database using mongoose instance
mongoose.connect('mongodb://localhost/movieapi');

var routes = require('./api/routes/routes');
// pass in app into routes function to handle routing
routes(app);

app.listen(port, function() {
	console.log('Running on port: ' + port);
});