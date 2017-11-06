// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Create user datum sub-schema for the user record schema
var userDatumSchema = new Schema({
  'datum': {
    'type': String,
    'default': ''
  }
});

// Create user record sub-schema for the user table schema
var userRecordSchema = new Schema({
  'data': [userDatumSchema]
});

// Create user table sub-schema for the user database schema
var userTableSchema = new Schema({
  'records': [userRecordSchema]
});

// Create database models
var userDatabase = mongoose.model('userDatabase', userTableSchema);

// Export database models
module.exports = userDatabase;
