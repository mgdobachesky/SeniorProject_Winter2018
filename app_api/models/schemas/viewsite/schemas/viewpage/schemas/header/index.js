// Include required modules
var mongoose = require('mongoose');

// Simplify Mongoose properties
var Schema = mongoose.Schema;

// Create Text Element schema
var headerSchema = new Schema({
    'headerValue': {
        'type': String,
        'required': true
    }
});

// Export Text schema
module.exports = headerSchema;
