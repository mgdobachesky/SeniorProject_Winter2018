// Include required modules
var debug = require('debug')('Express4');
var app = require('./app');
var http = require('http');

// Create HTTP server to redirect to HTTPS
http.createServer(app).listen(80);
