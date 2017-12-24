// Required modules
var textboxesDao = require('../../services/viewsites/textboxesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Create
function formInputsCreate(request, response) {
  if(request.body.kind === "textbox") {
    textboxesDao.textboxesCreate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Update
function formInputsUpdate(request, response) {
  if(request.body.kind === "textbox") {
    textboxesDao.textboxesUpdate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Delete
function formInputsDelete(request, response) {
  if(request.body.kind === "textbox") {
    textboxesDao.textboxesDelete(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Export functions
module.exports.formInputsCreate = formInputsCreate;
module.exports.formInputsUpdate = formInputsUpdate;
module.exports.formInputsDelete = formInputsDelete;
