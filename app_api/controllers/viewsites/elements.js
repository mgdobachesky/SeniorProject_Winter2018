// Required modules
var textDao = require('../../services/viewsites/textDao');
var formsDao = require('../../services/viewsites/formsDao');
var dataViewsDao = require('../../services/viewsites/dataViewsDao');


// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Create
function elementsCreate(request, response) {
  if(request.body.kind === "text") {
    textDao.textCreate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "form") {
    formsDao.formsCreate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "dataView") {
    dataViewsDao.dataViewsCreate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Update
function elementsUpdate(request, response) {
  if(request.body.kind === "text") {
    textDao.textUpdate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "form") {
    formsDao.formsUpdate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "dataView") {
    dataViewsDao.dataViewsUpdate(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Delete
function elementsDelete(request, response) {
  if(request.body.kind === "text") {
    textDao.textDelete(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "form") {
    formsDao.formsDelete(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  } else if(request.body.kind === "dataView") {
    dataViewsDao.dataViewsDelete(request)
    .then(function(results) {
      sendJSONresponse(response, 200, results);
    }, function(error) {
      sendJSONresponse(response, 404, error);
    });
  }
}

// Export functions
module.exports.elementsCreate = elementsCreate;
module.exports.elementsUpdate = elementsUpdate;
module.exports.elementsDelete = elementsDelete;
