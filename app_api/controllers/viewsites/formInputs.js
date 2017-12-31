// Include required modules
var textboxesDao = require('../../services/viewsites/textboxesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

/*
 * Controller used to create Form Inputs
 */
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

/*
 * Controller used to update Form Inputs
 */
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

/*
 * Controller used to delete Form Inputs
 */
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

// Export controller methods
module.exports.formInputsCreate = formInputsCreate;
module.exports.formInputsUpdate = formInputsUpdate;
module.exports.formInputsDelete = formInputsDelete;
