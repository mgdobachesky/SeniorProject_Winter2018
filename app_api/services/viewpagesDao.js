// Required modules
var mongoose = require('mongoose');
var viewpages = mongoose.model('viewpage');
var viewsites = mongoose.model('viewsite');

// ** CRUD OPERATIONS **

// Read operations
function viewpagesReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId) {
      reject('Viewsite ID is required!');
    } else {
      viewpages.find({'viewsiteId': request.params.viewsiteId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Viewpages found!');
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
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      viewpages.findOne({'_id': request.params.viewpageId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Viewpage not found!');
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
    viewsites.findById(request.body.viewsiteId)
    .exec(function(error, viewsiteData) {
      if(viewsiteData.userId != request.session.userId) {
        reject('You can only create Viewpages for Viewsites you own!');
      } else if(!request.body.viewpageName) {
        reject('All fields required!');
      } else {
        viewpages.create({
          'userId': request.session.userId,
          'viewsiteId': request.body.viewsiteId,
          'viewpageName': request.body.viewpageName,
          'permissionLevel': request.body.permissionLevel
        }, function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Viewpage created successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Update operations
function viewpagesUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      viewpages.findById(request.params.viewpageId)
      .exec(function(error, viewpageData) {
        if(!viewpageData) {
          reject('Viewpage not found!');
        } else if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(viewpageData.userId != request.session.userId) {
          reject('You can only update Viewpages you own!');
        } else {
          viewpageData.viewpageName = request.body.viewpageName;
          viewpageData.permissionLevel = request.body.permissionLevel;
          viewpageData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve('Viewpage updated successfully!');
            }
          });
        }
      });
    }
  });
  return promise;
}

// Delete operations
function viewpagesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    }
    viewpages.findById(request.params.viewpageId)
    .exec(function(error, viewpageData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(viewpageData.userId != request.session.userId) {
        reject('You can only delete Viewpages you own!');
      } else {
        viewpages.findByIdAndRemove(request.params.viewpageId)
        .exec(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Viewpage deleted successfully!');
          }
        });
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
