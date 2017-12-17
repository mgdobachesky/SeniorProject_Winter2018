// Required modules
var viewsitesDao = require('../services/viewsitesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function viewsitesReadAll(request, response) {
  viewsitesDao.viewsitesReadAll(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function viewsitesReadOneByName(request, response) {
  viewsitesDao.viewsitesReadOneByName(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function viewsitesReadOneById(request, response) {
  viewsitesDao.viewsitesReadOneById(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function viewsitesCreate(request, response) {
  viewsitesDao.viewsitesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function viewsitesUpdate(request, response) {
  viewsitesDao.viewsitesUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function viewsitesDelete(request, response) {
  viewsitesDao.viewsitesDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.viewsitesReadAll = viewsitesReadAll;
module.exports.viewsitesReadOneByName = viewsitesReadOneByName;
module.exports.viewsitesReadOneById = viewsitesReadOneById;
module.exports.viewsitesCreate = viewsitesCreate;
module.exports.viewsitesUpdate = viewsitesUpdate;
module.exports.viewsitesDelete = viewsitesDelete;
