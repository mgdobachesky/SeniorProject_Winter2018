// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Create user datum sub-schema for the user record schema
var userDatumSchema = new Schema({
  'elementId': {
    'type': ObjectId,
    'required': true
  },
  'datum': {
    'type': String,
    'default': ''
  }
});

// Create user record sub-schema for the user table schema
var userRecordSchema = new Schema({
  'record': [userDatumSchema]
});

// Create user table sub-schema for the user database schema
var userTableSchema = new Schema({
  'viewpageId': {
    'type': ObjectId,
    'required': true
  },
  'records': [userRecordSchema] 
});

// Create user database schema
var userDatabaseSchema = new Schema({
  'viewsiteId: {
    'type': ObjectId,
    'required': true
  },
  'tables': [userTableSchema]
});

// Create database models
var userDatabase = mongoose.model('userDatabase', userDatabaseSchema);

// Export database models
module.exports = userDatabase;

