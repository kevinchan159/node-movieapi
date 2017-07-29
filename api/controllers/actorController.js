var mongoose = require('mongoose');
Actor = mongoose.model('Actor');

// get all actors
module.exports.getActors = function(callback, limit) {
	Actor.find(callback).limit(limit);
};

// get actor by id
module.exports.getActorById = function(id, callback) {
	Actor.findById(id, callback);
};

// add actor
module.exports.createActor = function(actor, callback) {
	Actor.create(actor, callback);
};

// update actor by id
module.exports.updateActorById = function(id, actor, options, callback) {
	var query = {_id: id};
	var update = {
		name: actor.name,
		age: actor.age,
	};
	Actor.findOneAndUpdate(query, update, options, callback);
};

// delete actor by id
module.exports.removeActorById = function(id, callback) {
	var query = {_id: id};
	Actor.remove(query, callback);
};