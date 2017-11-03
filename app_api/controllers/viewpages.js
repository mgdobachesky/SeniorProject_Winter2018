
// Required modules
var mongoose = require('mongoose');
var viewpages = mongoose.model('viewpage');
var viewpagesDao = require('../services/viewpagesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function viewpagesReadAll(request, response) {
  viewpagesDao.viewpagesReadAll(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function viewpagesReadOne(request, response) {
  viewpagesDao.viewpagesReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function viewpagesCreate(request, response) {
  viewpagesDao.viewpagesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function viewpagesUpdate(request, response) {
  viewpagesDao.viewpagesUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function viewpagesDelete(request, response) {
  viewpagesDao.viewpagesDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.viewpagesReadAll = viewpagesReadAll;
module.exports.viewpagesReadOne = viewpagesReadOne;
module.exports.viewpagesCreate = viewpagesCreate;
module.exports.viewpagesUpdate = viewpagesUpdate;
module.exports.viewpagesDelete = viewpagesDelete;
