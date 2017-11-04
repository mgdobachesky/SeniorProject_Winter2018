// Required modules
var mongoose = require('mongoose');
var formFields = mongoose.model('formField');

// ** CRUD OPERATIONS **

// Read operations
function formFieldsReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      formFields.find({'formId': request.params.formId}).exec(function(error, results) {
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

function formFieldsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formFieldId) {
      reject('Form Field ID is required!');
    } else {
      formFields.findOne({'_id': request.params.formFieldId}).exec(function(error, results) {
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
function formFieldsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    formFields.create({
      'formId': request.body.formId,
      'formFieldType': request.body.formFieldType,
      'formFieldLabel': request.body.formFieldLabel,
      'formFieldValue': request.body.formFieldValue
    }, function(error, results) {
      if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        resolve('Form Field created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function formFieldsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formFieldId) {
      reject('Form Field ID is required!');
    }
    formFields.findById(request.params.formFieldId).exec(function(error, formFieldData) {
      if(!formFieldData) {
        reject('Form Field not found!');
      } else if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        formFieldData.formFieldLabel = request.body.formFieldLabel;
        formFieldData.formFieldValue = request.body.formFieldValue;
        formFieldData.save(function(error, results) {
          if(error) {
            console.log(error);
            reject('Something went wrong!');
          } else {
            resolve('Form Field updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function formFieldsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formFieldId) {
      reject('Form Field ID is required!');
    }
    formFields.findByIdAndRemove(request.params.formFieldId).exec(function(error, results) {
      if(error) {
        console.log(error);
        reject('Something went wrong!');
      } else {
        resolve('Form Field deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.formFieldsReadAll = formFieldsReadAll;
module.exports.formFieldsReadOne = formFieldsReadOne;
module.exports.formFieldsCreate = formFieldsCreate;
module.exports.formFieldsUpdate = formFieldsUpdate;
module.exports.formFieldsDelete = formFieldsDelete;
