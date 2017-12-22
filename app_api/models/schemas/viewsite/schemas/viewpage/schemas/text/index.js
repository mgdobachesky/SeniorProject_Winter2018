// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var textSchema = new Schema({
  'textValue': {
    'type': String,
    'required': true
  }
});

module.exports = textSchema;
