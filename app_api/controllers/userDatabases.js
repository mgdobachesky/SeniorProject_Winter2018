// Required modules
var userDatabasesDao = require('../services/userDatabasesDao');

// Handle JSON responses
function sendJSONresponse(res, status, content) {
  res.status(status);
  res.json(content);
}

// Read one
function userDatabasesReadOne(request, response) {
  userDatabasesDao.userDatabasesReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userTablesReadOne(request, response) {
  userDatabasesDao.userTablesReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userRecordsReadOne(request, response) {
  userDatabasesDao.userRecordsReadOne(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Create
function userDatabasesCreate(request, response) {
  userDatabasesDao.userDatabasesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userTablesCreate(request, response) {
  userDatabasesDao.userTablesCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userRecordsCreate(request, response) {
  userDatabasesDao.userRecordsCreate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Update
function userRecordsUpdate(request, response) {
  userDatabasesDao.userRecordsUpdate(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Delete
function userDatabasesDelete(request, response) {
  userDatabasesDao.userDatabasesDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userTablesDelete(request, response) {
  userDatabasesDao.userTablesDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

function userRecordsDelete(request, response) {
  userDatabasesDao.userRecordsDelete(request).then(function(results) {
    sendJSONresponse(response, 200, results);
  }, function(error) {
    sendJSONresponse(response, 404, error);
  });
}

// Export functions
module.exports.userDatabasesReadOne = userDatabasesReadOne;
module.exports.userTablesReadOne = userTablesReadOne;
module.exports.userRecordsReadOne = userRecordsReadOne;
module.exports.userDatabasesCreate = userDatabasesCreate;
module.exports.userTablesCreate = userTablesCreate;
module.exports.userRecordsCreate = userRecordsCreate;
module.exports.userRecordsUpdate = userRecordsUpdate;
module.exports.userDatabasesDelete = userDatabasesDelete;
module.exports.userTablesDelete = userTablesDelete;
module.exports.userRecordsDelete = userRecordsDelete;
