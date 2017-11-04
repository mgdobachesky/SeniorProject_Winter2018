// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var formFieldSchema = new Schema({
  'formId': {
    'type': ObjectId,
    'required': true
  },
  'formFieldType': {
    'type': String,
    'required': true
  },
  'formFieldLabel': {
    'type': String,
    'required': true
  },
  'formFieldValue': {
    'type': String
  }
});

// Create database models
var formField = mongoose.model('formField', formFieldSchema);

// Export database models
module.exports = formField;
