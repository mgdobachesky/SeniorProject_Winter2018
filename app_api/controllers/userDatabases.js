
// Required modules
var mongoose = require('mongoose');
var userDatabases = mongoose.model('userDatabase');
var userDatabasesDao = require('../services/userDatabasesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read one
function userDatabasesReadOne(request, response) {
  userDatabasesDao.userDatabasesReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function userDatabasesCreate(request, response) {
  userDatabasesDao.userDatabasesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userTablesCreate(request, response) {
  userDatabasesDao.userTablesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userRecordsCreate(request, response) {
  userDatabasesDao.userRecordsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.userDatabasesReadOne = userDatabasesReadOne;
module.exports.userDatabasesCreate = userDatabasesCreate;
module.exports.userTablesCreate = userTablesCreate;
module.exports.userRecordsCreate = userRecordsCreate;
