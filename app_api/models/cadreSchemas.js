// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

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

// Create viewsite schema
var viewsiteSchema = new Schema({
  'userId': {
    'type': ObjectId,
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

// Create viewpage schema
var viewpageSchema = new Schema({
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

// Create element schema
var elementSchema = new Schema({
  'viewpageId': {
    'type': ObjectId,
    'required': true
  },
  'elementType': {
    'type': String,
    'required': true
  },
  'elementLabel': {
    'type': String
  },
  'elementValue': {
    'type': String
  }
});

// Create database models
var user = mongoose.model('user', userSchema);
var viewsite = mongoose.model('viewsite', viewsiteSchema);
var viewpage = mongoose.model('viewpage', viewpageSchema);
var element = mongoose.model('element', elementSchema);

// Export database models
module.exports = user;
module.exports = viewsite;
module.exports = viewpage;
module.exports = element;
