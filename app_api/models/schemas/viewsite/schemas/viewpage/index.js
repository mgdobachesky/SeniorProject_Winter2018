// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Require child schemas
var textSchema = require('./schemas/text');
var formSchema = require('./schemas/form');
var dataViewSchema = require('./schemas/dataView');

// Define element parent class schemas
var elementSchema = new Schema({},
  { discriminatorKey: 'kind' });

// Create viewpage schema
var viewpageSchema = new Schema({
  'viewpageName': {
    'type': String,
    'required': true
  },
  'permissionLevel': {
    'type': Number,
    'default': 0
  },
  'elements': [elementSchema]
});

// Get the array of elements in the viewpage
var elementArray = viewpageSchema.path('elements');

// Create Element child class discriminators
var text = elementArray.discriminator('text', textSchema);
var form = elementArray.discriminator('form', formSchema);
var dataView = elementArray.discriminator('dataView', dataViewSchema);

// Export Viewpage schema
module.exports = viewpageSchema;
