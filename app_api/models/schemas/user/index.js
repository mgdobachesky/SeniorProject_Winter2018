// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create user schema
var userSchema = new Schema({
  'username': {
    'type': String,
    'required': true,
    'unique': true
  },
  'password': {
    'type': String,
    'required': true
  }
});

// Create database models
var user = mongoose.model('user', userSchema);

// Export database models
module.exports = user;
