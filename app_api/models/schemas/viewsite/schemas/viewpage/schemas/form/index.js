// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;

// Require child schemas
var textboxSchema = require('./schemas/textbox');

// Define Form Input parent class schema
var formInputSchema = new Schema({},
    {discriminatorKey: 'kind'});

// Define main Form schema
var formSchema = new Schema({
    'formTitle': {
        'type': String,
        'required': true
    },
    'formInputs': [formInputSchema]
});

// Get the parent array of Form Inputs in the Form
var formInputArray = formSchema.path('formInputs');

// Create Form Input child class discriminators
var textbox = formInputArray.discriminator('textbox', textboxSchema);

// Export Form schema
module.exports = formSchema;
