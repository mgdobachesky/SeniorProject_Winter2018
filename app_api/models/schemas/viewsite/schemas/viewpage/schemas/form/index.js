// Require mongoose to make a schemas with
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Require child schemas
var textboxSchema = require('./schemas/textbox');

// Define Form Input parent class schema
var formInputSchema = new Schema({},
  { discriminatorKey: 'kind', _id: false });

// Define Form schema
var formSchema = new Schema({
  'formTitle': {
    'type': String,
    'required': true
  },
  'formInputs': [formInputSchema]
});

// Get the array of Form Inputs in the Form
var formInputArray = formSchema.path('formInputs');

// Create Form Input Child class discriminators
var textbox = formInputArray.discriminator('textbox', textboxSchema);

// Export Form schema
module.exports = formSchema;
