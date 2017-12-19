// Required modules
var textDao = require('../services/textDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function textReadAll(request, response) {
  textDao.textReadAll(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function textReadOne(request, response) {
  textDao.textReadOne(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function textCreate(request, response) {
  textDao.textCreate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function textUpdate(request, response) {
  textDao.textUpdate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function textDelete(request, response) {
  textDao.textDelete(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.textReadAll = textReadAll;
module.exports.textReadOne = textReadOne;
module.exports.textCreate = textCreate;
module.exports.textUpdate = textUpdate;
module.exports.textDelete = textDelete;
