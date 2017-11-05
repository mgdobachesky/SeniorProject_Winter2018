// Required modules
var formFieldsDao = require('../services/formFieldsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function formFieldsReadAll(request, response) {
  formFieldsDao.formFieldsReadAll(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function formFieldsReadOne(request, response) {
  formFieldsDao.formFieldsReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function formFieldsCreate(request, response) {
  formFieldsDao.formFieldsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function formFieldsUpdate(request, response) {
  formFieldsDao.formFieldsUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function formFieldsDelete(request, response) {
  formFieldsDao.formFieldsDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.formFieldsReadAll = formFieldsReadAll;
module.exports.formFieldsReadOne = formFieldsReadOne;
module.exports.formFieldsCreate = formFieldsCreate;
module.exports.formFieldsUpdate = formFieldsUpdate;
module.exports.formFieldsDelete = formFieldsDelete;
