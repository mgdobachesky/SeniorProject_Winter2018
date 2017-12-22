// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Require child schemas
var userTableSchema = require('./schemas/userTable');

// Create user Database schema
var userDatabaseSchema = new Schema({
  tables: [userTableSchema]
});

// Create database models
var userDatabase = mongoose.model('userDatabase', userDatabaseSchema);

// Export database models
module.exports = userDatabase;
