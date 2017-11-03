// Required modules
var mongoose = require('mongoose');
var viewpages = mongoose.model('viewpage');

// ** CRUD OPERATIONS **

// Read operations
function viewpagesReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('Viewsite ID is required!');
    } else {
      viewpages.find({'viewsiteId': request.body.viewsiteId}).exec(function(error, results) {
        if(error) {
          reject('Something went wrong!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function viewpagesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    } else {
      viewpages.findOne({'_id': request.params.id}).exec(function(error, results) {
        if(error) {
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
function viewpagesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    viewpages.create({
      'viewsiteId': request.body.viewsiteId,
      'viewpageName': request.body.viewpageName,
      'viewpageType': request.body.viewpageType,
      'permissionLevel': request.body.permissionLevel
    }, function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve('Viewpage created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function viewpagesUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    viewpages.findById(request.params.id).exec(function(error, viewpageData) {
      if(!viewpageData) {
        reject('ID not found!');
      } else if(error) {
        reject('Something went wrong!');
      } else {
        viewpageData.viewpageName = request.body.viewpageName;
        viewpageData.viewpageType = request.body.viewpageType;
        viewpageData.permissionLevel = request.body.permissionLevel;
        viewpageData.save(function(error, results) {
          if(error) {
            reject('Something went wrong!');
          } else {
            resolve('Viewpage updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function viewpagesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    viewpages.findByIdAndRemove(request.params.id).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve('Viewpage deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.viewpagesReadAll = viewpagesReadAll;
module.exports.viewpagesReadOne = viewpagesReadOne;
module.exports.viewpagesCreate = viewpagesCreate;
module.exports.viewpagesUpdate = viewpagesUpdate;
module.exports.viewpagesDelete = viewpagesDelete;
