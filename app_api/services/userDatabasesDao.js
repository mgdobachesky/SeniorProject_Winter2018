// Required modules
var mongoose = require('mongoose');
var userDatabases = mongoose.model('userDatabase');

// ** CRUD OPERATIONS **

// Read operations
function userDatabasesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId) {
      reject('Viewsite ID is required!');
    } else {
      userDatabases.findOne({'_id': request.params.viewsiteId}).exec(function(error, results) {
        if(error) {
          console.log(error);
          reject('Something went wrong!');
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
      reject('Viewsite ID is required!');
    } else {
      userDatabases.create({
        '_id': request.body.viewsiteId
      }, function(error, results) {
        if(error) {
          console.log(error);
          reject('Something went wrong!');
        } else {
          resolve('User Database created successfully!');
        }
      });
    }
  });
  return promise;
}

function userTablesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId) {
      reject('Viewsite ID is required!');
    }
    userDatabases.findOne({'_id': request.params.viewsiteId}).exec(function(error, userDatabaseData) {
      if(!userDatabaseData) {
        reject('User Database not found!');
      } else if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        userDatabaseData.tables.push({
          '_id': request.body.formId
        });
        userDatabaseData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('User Table created successfully!');
          }
        });
      }
    });
  });
  return promise;
}

function userRecordsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId) {
      reject('Viewsite ID and Form ID are both required!');
    }
    userDatabases.findOne({'_id': request.params.viewsiteId}).exec(function(error, userDatabaseData) {
      if(!userDatabaseData) {
        reject('User Database not found!');
      } else if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        let userTable = userDatabaseData.tables.id(request.params.formId);
        let newRecord = userTable.records.create();
        for(formFieldId in request.body) {
          newRecord.data.push({
            '_id': formFieldId,
            'datum': request.body[formFieldId]
          });
        }
        userTable.records.push(newRecord);
        userDatabaseData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('User Record created successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Update operations

// Delete operations

// Export functions
module.exports.userDatabasesReadOne = userDatabasesReadOne;
module.exports.userDatabasesCreate = userDatabasesCreate;
module.exports.userTablesCreate = userTablesCreate;
module.exports.userRecordsCreate = userRecordsCreate;
