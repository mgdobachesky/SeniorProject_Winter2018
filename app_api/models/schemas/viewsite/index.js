// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

// Require dependent schemas
var viewpageSchema = require('./schemas/viewpage');
var landingPageSchema = require('./schemas/landingPage');

// Create Viewsite schema
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
    'viewsiteTheme': {
        'type': String,
        'default': "default"
    },
    'loginEnabled': {
        'type': Boolean,
        'default': false
    },
    'viewpages': [viewpageSchema]
});

// Get the parent array of Viewpages in the Viewsite
var viewpageArray = viewsiteSchema.path('viewpages');

// Set an alternative kind of viewpage as a discriminator
var LandingPage = viewpageArray.discriminator('landingPage', landingPageSchema);

// Catch duplicate viewsite errors on create
viewsiteSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } else {
        next(error);
    }
});

// Catch duplicate viewsite errors on update
viewsiteSchema.post('update', function (error, res, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } else {
        next(error);
    }
});

// Create database models
var viewsite = mongoose.model('viewsite', viewsiteSchema);

// Export database models
module.exports = viewsite;
