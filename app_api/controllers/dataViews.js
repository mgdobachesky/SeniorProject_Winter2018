// Required modules
var dataViewsDao = require('../services/dataViewsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function dataViewsReadAll(request, response) {
  dataViewsDao.dataViewsReadAll(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function dataViewsReadOne(request, response) {
  dataViewsDao.dataViewsReadOne(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function dataViewsCreate(request, response) {
  dataViewsDao.dataViewsCreate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function dataViewsUpdate(request, response) {
  dataViewsDao.dataViewsUpdate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function dataViewsDelete(request, response) {
  dataViewsDao.dataViewsDelete(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.dataViewsReadAll = dataViewsReadAll;
module.exports.dataViewsReadOne = dataViewsReadOne;
module.exports.dataViewsCreate = dataViewsCreate;
module.exports.dataViewsUpdate = dataViewsUpdate;
module.exports.dataViewsDelete = dataViewsDelete;
