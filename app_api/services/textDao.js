// Required modules
var mongoose = require('mongoose');
var text = mongoose.model('text');
var viewpages = mongoose.model('viewpage');

// ** CRUD OPERATIONS **

// Read operations
function textReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.textId) {
      reject('Text ID is required!');
    } else {
      text.findOne({'_id': request.params.textId}).select('-userId').exec(function(error, results) {
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

function textReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      text.find({'viewpageId': request.params.viewpageId}).select('-userId').exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Text found!');
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
    viewpages.findById(request.body.viewpageId).exec(function(error, viewpageData) {
      if(viewpageData.userId != request.session.userId) {
        reject('You can only create Text for Viewpages you own!');
      } else if(!request.body.textValue) {
        reject('All fields required!');
      } else {
        text.create({
          'userId': request.session.userId,
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
    } else {
      text.findById(request.params.textId).exec(function(error, textData) {
        if(!textData) {
          reject('Text not found!');
        } else if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(textData.userId != request.session.userId) {
          reject('You can only update Text you own!');
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
    }
  });
  return promise;
}

// Delete operations
function textDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.textId) {
      reject('Text ID is required!');
    }
    text.findById(request.params.textId).exec(function(error, textData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(textData.userId != request.session.userId) {
        reject('You can only delete Text you own!');
      } else {
        text.findByIdAndRemove(request.params.textId).exec(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Text deleted successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Export functions
module.exports.textReadOne = textReadOne;
module.exports.textReadAll = textReadAll;
module.exports.textCreate = textCreate;
module.exports.textUpdate = textUpdate;
module.exports.textDelete = textDelete;
