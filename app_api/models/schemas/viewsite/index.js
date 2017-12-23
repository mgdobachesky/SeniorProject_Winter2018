// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Require child schemas
var viewpageSchema = require('./schemas/viewpage');

// Create viewsite schema
var viewsiteSchema = new Schema({
  'userId': {
    'type': ObjectId,
    'ref': 'user',
    'required': true
  },
  'viewsiteName': {
    'type': String,
    'required': true,
    'unique': true
  },
  'loginEnabled': {
    'type': Boolean,
    'default': false
  },
  'viewpages': [viewpageSchema]
});

// Catch duplicate viewsite errors on create
viewsiteSchema.post('save', function(error, doc, next) {
  if(error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});

// Catch duplicate viewsite errors on update
viewsiteSchema.post('update', function(error, res, next) {
  if(error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
});

// Create database models
var viewsite = mongoose.model('viewsite', viewsiteSchema);

// Export database models
module.exports = viewsite;
