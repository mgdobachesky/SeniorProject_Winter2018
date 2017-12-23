// Required modules
var mongoose = require('mongoose');
var userDatabases = mongoose.model('userDatabase');

// ** CRUD OPERATIONS **

// Read operations
function userDatabasesReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.session.userId) {
      reject('User ID required!');
    } else {
      userDatabases.find({'userId': request.session.userId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No User Databases found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function userDatabasesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('User Database ID is required!');
    } else {
      userDatabases.findOne({'_id': request.body.viewsiteId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User Database not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function userDatabasesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to create a User Database!');
    } else {
      userDatabases.create({
        '_id': request.body.viewsiteId,
        'userId': request.session.userId
      }, function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Delete operations
function userDatabasesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('User Database ID is required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to delete a viewsite!');
    } else {
      userDatabases.findById(request.body.viewsiteId)
      .exec(function(error, userDatabaseData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!userDatabaseData) {
          reject('User Database doesn\'t exist!');
        } else if(userDatabaseData.userId != request.session.userId) {
          reject('You can only delete User Databases you own!');
        } else {
          userDatabases.findByIdAndRemove(request.body.viewsiteId)
          .exec(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve(results);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Export functions
module.exports.userDatabasesReadAll = userDatabasesReadAll;
module.exports.userDatabasesReadOne = userDatabasesReadOne;
module.exports.userDatabasesCreate = userDatabasesCreate;
module.exports.userDatabasesDelete = userDatabasesDelete;
