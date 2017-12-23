// Required modules
var userDatabasesDao = require('../../services/userDatabases/userDatabasesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read All
function userDatabasesReadAll(request, response) {
  userDatabasesDao.userDatabasesReadAll(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read One
function userDatabasesReadOne(request, response) {
  userDatabasesDao.userDatabasesReadOne(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function userDatabasesCreate(request, response) {
  userDatabasesDao.userDatabasesCreate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function userDatabasesDelete(request, response) {
  userDatabasesDao.userDatabasesDelete(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.userDatabasesReadAll = userDatabasesReadAll;
module.exports.userDatabasesReadOne = userDatabasesReadOne;
module.exports.userDatabasesCreate = userDatabasesCreate;
module.exports.userDatabasesDelete = userDatabasesDelete;
