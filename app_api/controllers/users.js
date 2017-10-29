
// Required modules
var mongoose = require('mongoose');
var user = mongoose.model('user');
var usersDao = require('../services/usersDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read a user
function usersReadOne(request, response) {
  usersDao.usersReadOne(request).then(function(results) {
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
function usersUpdateOne(request, response) {
  usersDao.usersUpdateOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete a user
function usersDeleteOne(request, response) {
  usersDao.usersDeleteOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.usersReadOne = usersReadOne;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdateOne = usersUpdateOne;
module.exports.usersDeleteOne = usersDeleteOne;
