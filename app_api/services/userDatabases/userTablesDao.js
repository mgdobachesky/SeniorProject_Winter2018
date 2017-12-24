// Required modules
var mongoose = require('mongoose');
var userDatabases = mongoose.model('userDatabase');

// ** CRUD OPERATIONS **

// Create operations
function userTablesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('User Database ID is required!');
    } else if(!request.body.elementId) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to create a User Table!');
    } else {
      userDatabases.findById(request.body.viewsiteId)
      .exec(function(error, userDatabaseData) {
        if(userDatabaseData.userId != request.session.userId) {
          reject('You can only create User Tables for User Databases you own!');
        } else if(!userDatabaseData) {
          reject('User Database not found!');
        } else {
          userDatabaseData.tables.push({
            '_id': request.body.elementId
          });
          userDatabaseData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Delete operations
function userTablesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.elementId) {
      reject('User Database and Table IDs are both required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to delete a User Table!');
    } else {
      userDatabases.findById(request.body.viewsiteId)
      .exec(function(error, userDatabaseData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!userDatabaseData) {
          reject('User Database not found!');
        } else if(userDatabaseData.userId != request.session.userId) {
          reject('You can only delete User Tables you own!');
        } else if(!userDatabaseData.tables.id(request.body.elementId)) {
          reject('User Table doesn\'t exist!');
        } else {
          userDatabaseData.tables.id(request.body.elementId).remove();
          userDatabaseData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Export functions
module.exports.userTablesCreate = userTablesCreate;
module.exports.userTablesDelete = userTablesDelete;
