// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var dataViewSchema = new Schema({
  'formId': {
    'type': ObjectId,
    'required': true
  }
});

// Export database models
module.exports = dataViewSchema;
