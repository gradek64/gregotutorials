var express    = require('express');        // call express
var app        = express(); 
var port = process.env.PORT || 8080;        // set our port
var config = require('./config'); // get our config file

//CONNECT TO MONGODB
// =============================================================================
var mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1/CRUD_mongo_db');
var mongoURI = config.database;
var MongoDB = mongoose.connect(mongoURI).connection;
app.set('superSecret', config.secret); // used when we create and verify JSON Web Tokens for user to be logged in;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magical mystery happens on port ' + port);

module.exports = app;
