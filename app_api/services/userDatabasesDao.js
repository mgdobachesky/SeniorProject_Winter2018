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

function userTablesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId) {
      reject('Viewsite ID and Form ID are both required!');
    } else {
      userDatabases.findOne({'_id': request.params.viewsiteId}).exec(function(error, results) {
        if(error) {
          console.log(error);
          reject('Something went wrong!');
        } else {
          resolve(results.tables.id(request.params.formId));
        }
      });
    }
  });
  return promise;
}

function userRecordsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId || !request.params.recordId) {
      reject('Viewsite ID, Form ID, and Record ID are all required!');
    } else {
      userDatabases.findOne({'_id': request.params.viewsiteId}).exec(function(error, results) {
        if(error) {
          console.log(error);
          reject('Something went wrong!');
        } else {
          resolve(results.tables.id(request.params.formId).records.id(request.params.recordId));
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
function userRecordsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId || !request.params.recordId) {
      reject('Viewsite ID, Form ID, and Record ID are all required!');
    }
    userDatabases.findOneAndUpdate({'_id': request.params.viewsiteId}).exec(function(error, userDatabaseData) {
      if(!userDatabaseData) {
        reject('User Database not found!');
      } else if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        let userTable = userDatabaseData.tables.id(request.params.formId);
        let userRecord = userTable.records.id(request.params.recordId);
        let updatedRecord = userTable.records.create();
        updatedRecord._id = userRecord._id;
        for(formFieldId in request.body) {
          updatedRecord.data.push({
            '_id': formFieldId,
            'datum': request.body[formFieldId]
          });
        }
        userRecord.set(updatedRecord);
        userDatabaseData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('User Record updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function userDatabasesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId) {
      reject('Viewsite ID is required!');
    }
    userDatabases.findByIdAndRemove(request.params.viewsiteId).exec(function(error, results) {
      if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        resolve('User Database deleted successfully!');
      }
    });
  });
  return promise;
}

function userTablesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId) {
      reject('Viewsite ID and Form ID are both required!');
    }
    userDatabases.findById(request.params.viewsiteId).exec(function(error, userDatabaseData) {
      if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        userDatabaseData.tables.id(request.params.formId).remove();
        userDatabaseData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('User Table deleted successfully!');
          }
        });
      }
    });
  });
  return promise;
}

function userRecordsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId || !request.params.formId || !request.params.recordId) {
      reject('Viewsite ID, Form ID, and Record ID are all required!');
    }
    userDatabases.findById(request.params.viewsiteId).exec(function(error, userDatabaseData) {
      if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        userDatabaseData.tables.id(request.params.formId).records.id(request.params.recordId).remove();
        userDatabaseData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('User Record deleted successfully!');
          }
        });
      }
    });
  });
  return promise;
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
