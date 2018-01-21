// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;

// Create user schema
var userUserSchema = new Schema({
  'username': {
    'type': String,
    'required': true,
    'unique': true
  },
  'password': {
    'type': String,
    'required': true
  },
  'permissionLevel': {
    'type': Number,
    'default': 3
  }
});

// Catch duplicate username errors on create
userUserSchema.post('save', function(error, doc, next) {
  if(error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});

// Catch duplicate username errors on update
userUserSchema.post('update', function(error, res, next) {
  if(error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});

// Export database models
module.exports = userUserSchema;
