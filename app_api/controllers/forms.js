// Required modules
var formsDao = require('../services/formsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function formsReadAllByViewsite(request, response) {
  formsDao.formsReadAllByViewsite(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function formsReadAllByViewpage(request, response) {
  formsDao.formsReadAllByViewpage(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function formsReadOne(request, response) {
  formsDao.formsReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function formsCreate(request, response) {
  formsDao.formsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function formsUpdate(request, response) {
  formsDao.formsUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function formsDelete(request, response) {
  formsDao.formsDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.formsReadAllByViewsite = formsReadAllByViewsite;
module.exports.formsReadAllByViewpage = formsReadAllByViewpage;
module.exports.formsReadOne = formsReadOne;
module.exports.formsCreate = formsCreate;
module.exports.formsUpdate = formsUpdate;
module.exports.formsDelete = formsDelete;
