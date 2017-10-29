#!/usr/bin/env node
// Require required modules
var debug = require('debug')('Express4');
var app = require('./app');

// Set the app to run on selected port
app.set('port', process.env.PORT || 3000);

// Start the server listening on the port that the app is running on
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
