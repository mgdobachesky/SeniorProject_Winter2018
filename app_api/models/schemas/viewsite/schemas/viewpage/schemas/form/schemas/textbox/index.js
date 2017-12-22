// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create child schema
var textboxSchema = new Schema({
  'textboxLabel': {
    'type': String,
    'required': true
  }
});

// Export child schema
module.exports = textboxSchema;
