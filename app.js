// Add required modules already built into Nodejs
var path = require('path');
var fs = require("fs");

// Add required modules created by a third parties
var cors = require('cors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);

// Add required modules that exist within the project
require('./app_api/models/db');
var routesServer = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');
var db = mongoose.connection;

// Create Express application
var app = express();

// Set the application view engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'pug');
app.locals.basedir = path.join(__dirname, 'public');

// Set the application icon
//app.use(favicon(__dirname + '/public/favicon.ico'));

// Configure the application middleware
app.use(session({
  secret: '3Y8tQ9TUo9uJd6f',
  store: new mongoStore({mongooseConnection: db})
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));
app.use(cors());
app.set('json spaces', 2);

// Add the application routes
app.use('/', routesServer);
app.use('/api/v1', routesApi);

// Catch 404 errors and forward to error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ** Error Handlers **

// Development error handler
if(app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      "error": {
        "message": err.message,
        "status": err.status
      }
    });
  });
}

// Production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    "error": {
      "message": 'Something failed!',
      "status": 500
    }
  });
});

// Export application
module.exports = app;
