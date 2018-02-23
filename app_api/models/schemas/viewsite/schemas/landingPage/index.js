// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;

// Create Text Element schema
var landingPageSchema = new Schema({
    'catchPhrase': {
        'type': String,
        'default': ''
    }
});

// Export Landing Page schema
module.exports = landingPageSchema;
