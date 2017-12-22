// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Require child schemas
var userDatumSchema = require('./schemas/userDatum');

// Create user record sub-schema for the user table schema
var userRecordSchema = new Schema({
  'data': [userDatumSchema]
});

// Export schema
module.exports = userRecordSchema;
