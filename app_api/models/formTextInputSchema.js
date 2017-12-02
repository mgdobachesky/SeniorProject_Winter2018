// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var formTextInputSchema = new Schema({
  'userId': {
    'type': ObjectId,
    'ref': 'user',
    'required': true
  },
  'formId': {
    'type': ObjectId,
    'required': true
  },
  'formTextInputLabel': {
    'type': String,
    'required': true
  }
});

// Create database models
var formTextInput = mongoose.model('formTextInput', formTextInputSchema);

// Export database models
module.exports = formTextInput;
