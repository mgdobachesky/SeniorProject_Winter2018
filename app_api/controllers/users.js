
// Required modules
var mongoose = require('mongoose');
var user = mongoose.model('user');
var usersDao = require('../services/usersDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Login a user
function usersLogin(request, response) {
  usersDao.usersLogin(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Check if a user exists
function usersExists(request, response) {
  usersDao.usersExists(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create a user
function usersCreate(request, response) {
  usersDao.usersCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update a user
function usersUpdate(request, response) {
  usersDao.usersUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete a user
function usersDelete(request, response) {
  usersDao.usersDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.usersLogin = usersLogin;
module.exports.usersExists = usersExists;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdate = usersUpdate;
module.exports.usersDelete = usersDelete;
