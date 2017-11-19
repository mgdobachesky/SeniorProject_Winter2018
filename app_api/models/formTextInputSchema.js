// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var formTextInputSchema = new Schema({
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
