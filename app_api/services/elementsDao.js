// Required modules
var mongoose = require('mongoose');
var elements = mongoose.model('element');

// ** CRUD OPERATIONS **

// Read operations
function elementsReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      elements.find({'viewpageId': request.params.viewpageId}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Elements found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function elementsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.elementId) {
      reject('Element ID is required!');
    } else {
      elements.findOne({'_id': request.params.elementId}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Element not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function elementsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    elements.create({
      'viewpageId': request.body.viewpageId,
      'elementType': request.body.elementType,
      'elementValue': request.body.elementValue
    }, function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Element created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function elementsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.elementId) {
      reject('Element ID is required!');
    }
    elements.findById(request.params.elementId).exec(function(error, elementData) {
      if(!elementData) {
        reject('Element not found!');
      } else if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        elementData.elementValue = request.body.elementValue;
        elementData.save(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Element updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function elementsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.elementId) {
      reject('Element ID is required!');
    }
    elements.findByIdAndRemove(request.params.elementId).exec(function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        resolve('Element deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.elementsReadAll = elementsReadAll;
module.exports.elementsReadOne = elementsReadOne;
module.exports.elementsCreate = elementsCreate;
module.exports.elementsUpdate = elementsUpdate;
module.exports.elementsDelete = elementsDelete;
