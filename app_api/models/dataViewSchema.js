// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var dataViewSchema = new Schema({
  'userId': {
    'type': ObjectId,
    'ref': 'user',
    'required': true
  },
  'form': {
    'type': ObjectId,
    'ref': 'form',
    'required': true
  },
  'userTable': {
    'type': ObjectId,
    'ref': 'userDatabase',
    'required': true
  },
  'viewpageId': {
    'type': ObjectId,
    'required': true
  }
});

// Create database models
var dataView = mongoose.model('dataView', dataViewSchema);

// Export database models
module.exports = dataView;
