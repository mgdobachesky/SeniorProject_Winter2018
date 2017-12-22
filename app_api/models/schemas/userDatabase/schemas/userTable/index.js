// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Require child schemas
var userRecordSchema = require('./schemas/userRecord');

// Create user table sub-schema for the user database schema
var userTableSchema = new Schema({
  'records': [userRecordSchema]
});

// Export schema
module.exports = userTableSchema;
