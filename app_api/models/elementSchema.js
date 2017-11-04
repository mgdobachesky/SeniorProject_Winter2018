// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Create element schema
var elementSchema = new Schema({
  'viewpageId': {
    'type': ObjectId,
    'required': true
  },
  'elementType': {
    'type': String,
    'required': true
  },
  'elementValue': {
    'type': String,
    'default': ''
  }
});

// Create database models
var element = mongoose.model('element', elementSchema);

// Export database models
module.exports = element;
