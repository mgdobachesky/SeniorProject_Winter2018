#!/usr/bin/env node

// Include required modules
var debug = require('debug')('Express4');
var app = require('./app');
var fs = require('fs');
var https = require('https');

// HTTPS certificate information
var key = fs.readFileSync('/etc/letsencrypt/live/cadre.me/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/cadre.me/cert.pem');
var ca = fs.readFileSync('/etc/letsencrypt/live/cadre.me/chain.pem');

// Create SSL options
var options = {
  key: key,
  cert: cert,
  ca: ca
};

// Start the server to be listening on the appropriate port
https.createServer(options, app).listen(443);
