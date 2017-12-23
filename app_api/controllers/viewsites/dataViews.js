// Required modules
var dataViewsDao = require('../../services/viewsites/dataViewsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
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
module.exports.dataViewsCreate = dataViewsCreate;
module.exports.dataViewsUpdate = dataViewsUpdate;
module.exports.dataViewsDelete = dataViewsDelete;
