// Required modules
var mongoose = require('mongoose');
var formTextInputs = mongoose.model('formTextInput');

// ** CRUD OPERATIONS **

// Read operations
function formTextInputsReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      formTextInputs.find({'formId': request.params.formId}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Form Text Inputs found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function formTextInputsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formTextInputId) {
      reject('Form Text Input ID is required!');
    } else {
      formTextInputs.findOne({'_id': request.params.formTextInputId}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Form Text Input not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function formTextInputsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    formTextInputs.create({
      'formId': request.body.formId,
      'formTextInputLabel': request.body.formTextInputLabel
    }, function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Form Text Input created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function formTextInputsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formTextInputId) {
      reject('Form Text Input ID is required!');
    }
    formTextInputs.findById(request.params.formTextInputId).exec(function(error, formTextInputData) {
      if(!formTextInputData) {
        reject('Form Text Input not found!');
      } else if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        formTextInputData.formTextInputLabel = request.body.formTextInputLabel;
        formTextInputData.save(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Form Text Input updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function formTextInputsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formTextInputId) {
      reject('Form Text Input ID is required!');
    }
    formTextInputs.findByIdAndRemove(request.params.formTextInputId).exec(function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Form Text Input deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.formTextInputsReadAll = formTextInputsReadAll;
module.exports.formTextInputsReadOne = formTextInputsReadOne;
module.exports.formTextInputsCreate = formTextInputsCreate;
module.exports.formTextInputsUpdate = formTextInputsUpdate;
module.exports.formTextInputsDelete = formTextInputsDelete;