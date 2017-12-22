// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user datum sub-schema for the user record schema
var userDatumSchema = new Schema({
  'datum': {
    'type': String,
    'default': ''
  }
});

// Export schema
module.exports = userDatumSchema;
