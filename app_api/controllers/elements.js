// Required modules
var elementsDao = require('../services/elementsDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read all
function elementsReadAll(request, response) {
  elementsDao.elementsReadAll(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Read one
function elementsReadOne(request, response) {
  elementsDao.elementsReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function elementsCreate(request, response) {
  elementsDao.elementsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function elementsDelete(request, response) {
  elementsDao.elementsDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.elementsReadAll = elementsReadAll;
module.exports.elementsReadOne = elementsReadOne;
module.exports.elementsCreate = elementsCreate;
module.exports.elementsDelete = elementsDelete;
