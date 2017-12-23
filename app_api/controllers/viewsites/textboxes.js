// Required modules
var textboxesDao = require('../../services/viewsites/textboxesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Create
function textboxesCreate(request, response) {
  textboxesDao.textboxesCreate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function textboxesUpdate(request, response) {
  textboxesDao.textboxesUpdate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function textboxesDelete(request, response) {
  textboxesDao.textboxesDelete(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.textboxesCreate = textboxesCreate;
module.exports.textboxesUpdate = textboxesUpdate;
module.exports.textboxesDelete = textboxesDelete;
