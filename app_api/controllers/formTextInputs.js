// Required modules
var formTextInputsDao = require('../services/formTextInputsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function formTextInputsReadAll(request, response) {
  formTextInputsDao.formTextInputsReadAll(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function formTextInputsReadOne(request, response) {
  formTextInputsDao.formTextInputsReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function formTextInputsCreate(request, response) {
  formTextInputsDao.formTextInputsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function formTextInputsUpdate(request, response) {
  formTextInputsDao.formTextInputsUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function formTextInputsDelete(request, response) {
  formTextInputsDao.formTextInputsDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.formTextInputsReadAll = formTextInputsReadAll;
module.exports.formTextInputsReadOne = formTextInputsReadOne;
module.exports.formTextInputsCreate = formTextInputsCreate;
module.exports.formTextInputsUpdate = formTextInputsUpdate;
module.exports.formTextInputsDelete = formTextInputsDelete;
