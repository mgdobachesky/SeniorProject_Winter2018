// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;

// Require child schemas
var textSchema = require('./schemas/text');
var formSchema = require('./schemas/form');
var dataViewSchema = require('./schemas/dataView');
var imageSchema = require('./schemas/image');
var headerSchema = require('./schemas/header');

// Define element parent class schema
var elementSchema = new Schema({},
    {discriminatorKey: 'kind'});

// Create main Viewpage schema
var viewpageSchema = new Schema({
    'viewpageName': {
        'type': String,
        'required': true
    },
    'permissionLevel': {
        'type': Number,
        'default': 3
    },
    'elements': [elementSchema]
}, {discriminatorKey: 'kind'});

// Get the parent array of Elements in the Viewpage
var elementArray = viewpageSchema.path('elements');

// Create Element child class discriminators
var text = elementArray.discriminator('text', textSchema);
var form = elementArray.discriminator('form', formSchema);
var dataView = elementArray.discriminator('dataView', dataViewSchema);
var image = elementArray.discriminator('image', imageSchema);
var header = elementArray.discriminator('header', headerSchema);

// Export Viewpage schema
module.exports = viewpageSchema;
