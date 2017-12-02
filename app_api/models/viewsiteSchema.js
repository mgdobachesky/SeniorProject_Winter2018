// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

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
  }
});

// Create database models
var viewsite = mongoose.model('viewsite', viewsiteSchema);

// Export database models
module.exports = viewsite;
