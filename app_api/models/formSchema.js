// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var formSchema = new Schema({
  'viewsiteId': {
    'type': ObjectId,
    'required': true
  },
  'viewpageId': {
    'type': ObjectId,
    'required': true
  },
  'formTitle': {
    'type': String,
    'required': true
  }
});

// Create database models
var form = mongoose.model('form', formSchema);

// Export database models
module.exports = form;
