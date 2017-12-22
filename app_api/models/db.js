// Include required modules
var mongoose = require('mongoose');

// Set the database uri
var dbURI = 'mongodb://localhost/cadre';

// Handle shutdown and restart events
var gracefulShutdown = function(message, callback) {
  mongoose.connection.close(function() {
    console.log("Mongoose disconnected through " + message);
    callback();
  });
};

// Connect to the database
mongoose.connect(dbURI);

// Run when database connects
mongoose.connection.on('connected', function() {
  console.log("Mongoose connected to " + dbURI);
});

// Run when there is an error connecting
mongoose.connection.on('error', function(error) {
  console.log("Mongoose connection error: " + error);
  process.exit(0);
});

// Run after disconnecting
mongoose.connection.on('disconnected', function() {
  console.log("Mongoose disconnected");
});

// Run when the app terminates
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

// Run when the app exits
process.on('exit', function(code) {
  console.log('About to exit with code:', code);
});

// Bring in required schemas
require('./schemas/user');
require('./schemas/viewsite');
require('./schemas/userDatabase');
