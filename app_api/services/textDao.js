// Required modules
var mongoose = require('mongoose');
var text = mongoose.model('text');

// ** CRUD OPERATIONS **

// Read operations
function textReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.textId) {
      reject('Text ID is required!');
    } else {
      text.findOne({'_id': request.params.textId}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Text not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function textCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    text.create({
      'viewpageId': request.body.viewpageId,
      'textValue': request.body.textValue
    }, function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Text created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function textUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.textId) {
      reject('Text ID is required!');
    }
    text.findById(request.params.textId).exec(function(error, textData) {
      if(!textData) {
        reject('Text not found!');
      } else if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        textData.textValue = request.body.textValue;
        textData.save(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Text updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function textDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.textId) {
      reject('Text ID is required!');
    }
    text.findByIdAndRemove(request.params.textId).exec(function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Text deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.textReadOne = textReadOne;
module.exports.textCreate = textCreate;
module.exports.textUpdate = textUpdate;
module.exports.textDelete = textDelete;
