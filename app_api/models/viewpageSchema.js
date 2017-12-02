// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Create viewpage schema
var viewpageSchema = new Schema({
  'userId': {
    'type': ObjectId,
    'ref': 'user',
    'required': true
  },
  'viewsiteId': {
    'type': ObjectId,
    'required': true
  },
  'viewpageName': {
    'type': String,
    'required': true
  },
  'permissionLevel': {
    'type': Number,
    'default': 0
  }
});

// Create database models
var viewpage = mongoose.model('viewpage', viewpageSchema);

// Export database models
module.exports = viewpage;
