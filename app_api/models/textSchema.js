// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var textSchema = new Schema({
  'textValue': {
    'type': String,
    'required': true
  },
  'viewpageId': {
    'type': ObjectId,
    'required': true
  }
});

// Create database models
var text = mongoose.model('text', textSchema);

// Export database models
module.exports = text;
