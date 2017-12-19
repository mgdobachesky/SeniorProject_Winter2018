// Required modules
var mongoose = require('mongoose');
var userDatabases = mongoose.model('userDatabase');

// ** CRUD OPERATIONS **

// Read operations
function userTablesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      userDatabases.findOne({'_id': request.params.formId})
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User Table not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function userRecordsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.recordId) {
      reject('Record ID is required!');
    } else {
      userDatabases.findOne({'records._id': request.params.recordId})
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User Record not found!');
        } else {
          resolve(results.records.id(request.params.recordId));
        }
      });
    }
  });
  return promise;
}

// Create operations
function userTablesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    }
    userDatabases.create({
      '_id': request.params.formId
    }, function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('User Table created successfully!');
      }
    });
  });
  return promise;
}

function userRecordsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      userDatabases.findOne({'_id': request.params.formId})
      .exec(function(error, userTableData) {
        if(!userTableData) {
          reject('User Table not found!');
        } else if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else {
          let newRecord = userTableData.records.create();
          for(formFieldId in request.body) {
            newRecord.data.push({
              '_id': formFieldId,
              'datum': request.body[formFieldId]
            });
          }
          userTableData.records.push(newRecord);
          userTableData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve('User Record created successfully!');
            }
          });
        }
      });
    }
  });
  return promise;
}

// Update operations
function userRecordsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.recordId) {
      reject('Record ID is required!');
    }
    userDatabases.findOne({'records._id': request.params.recordId})
    .exec(function(error, userTableData) {
      if(!userTableData) {
        reject('User Record not found!');
      } else if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        let userRecord = userTableData.records.id(request.params.recordId);
        let updatedRecord = userTableData.records.create();
        updatedRecord._id = userRecord._id;
        for(formFieldId in request.body) {
          updatedRecord.data.push({
            '_id': formFieldId,
            'datum': request.body[formFieldId]
          });
        }
        userRecord.set(updatedRecord);
        userTableData.save(function(error, results) {
          if(error) {
            console.log(error.message);
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
function userTablesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    }
    userDatabases.findByIdAndRemove(request.params.formId)
    .exec(function(error, userTableData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(!userTableData) {
        reject('User Table not found!');
      } else {
        resolve('User Table deleted successfully!');
      }
    });
  });
  return promise;
}

function userRecordsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.recordId) {
      reject('Record ID is required!');
    }
    userDatabases.findOne({'records._id': request.params.recordId})
    .exec(function(error, userTableData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(!userTableData) {
        reject('User Record not found!');
      } else {
        userTableData.records.id(request.params.recordId).remove();
        userTableData.save(function(error, results) {
          if(error) {
            console.log(error.message);
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
module.exports.userTablesReadOne = userTablesReadOne;
module.exports.userRecordsReadOne = userRecordsReadOne;
module.exports.userTablesCreate = userTablesCreate;
module.exports.userRecordsCreate = userRecordsCreate;
module.exports.userRecordsUpdate = userRecordsUpdate;
module.exports.userTablesDelete = userTablesDelete;
module.exports.userRecordsDelete = userRecordsDelete;
