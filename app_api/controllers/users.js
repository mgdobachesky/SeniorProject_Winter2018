// Required modules
var usersDao = require('../services/usersDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Log in a user
function usersLogIn(request, response) {
  usersDao.usersLogIn(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Get a user
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

// Check if a user exists
function usersExists(request, response) {
  usersDao.usersExists(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Log a user out
function usersLogout(request, response) {
  usersDao.usersLogout(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Is user logged in?
function usersIsLoggedIn(request, response) {
  usersDao.usersIsLoggedIn(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.usersLogIn = usersLogIn;
module.exports.usersReadOne = usersReadOne;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdate = usersUpdate;
module.exports.usersDelete = usersDelete;
module.exports.usersExists = usersExists;
module.exports.usersLogout = usersLogout;
module.exports.usersIsLoggedIn = usersIsLoggedIn;
