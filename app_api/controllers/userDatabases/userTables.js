// Required modules
var userTablesDao = require('../../services/userDatabases/userTablesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Create
function userTablesCreate(request, response) {
  userTablesDao.userTablesCreate(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function userTablesDelete(request, response) {
  userTablesDao.userTablesDelete(request)
  .then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.userTablesCreate = userTablesCreate;
module.exports.userTablesDelete = userTablesDelete;
