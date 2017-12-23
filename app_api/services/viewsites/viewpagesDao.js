// Required modules
var mongoose = require('mongoose');
var viewsites = mongoose.model('viewsite');

// ** CRUD OPERATIONS **

// Create operations
function viewpagesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId) {
      reject('Viewsite ID is required!');
    } else if(!request.body.viewpageName) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to create a viewpage!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(viewsiteData.userId != request.session.userId) {
          reject('You can only create Viewpages for Viewsites you own!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else {
          viewsiteData.viewpages.push({
            'viewpageName': request.body.viewpageName,
            'permissionLevel': request.body.permissionLevel
          });
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve(results);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Update operations
function viewpagesUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId) {
      reject('Viewsite and Viewpage IDs are both required!');
    } else if(!request.body.viewpageName) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to update a Viewpage!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only update Viewpages you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId)) {
          reject('Viewpage doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).viewpageName = request.body.viewpageName;
          viewsiteData.viewpages.id(request.body.viewpageId).permissionLevel = request.body.permissionLevel;
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve(results);
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
    if(!request.body.viewsiteId || !request.body.viewpageId) {
      reject('Viewsite and Viewpage IDs are both required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to delete a Viewpage!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only delete Viewpages you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId)) {
          reject('Viewpage doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).remove();
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve(results);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Export functions
module.exports.viewpagesCreate = viewpagesCreate;
module.exports.viewpagesUpdate = viewpagesUpdate;
module.exports.viewpagesDelete = viewpagesDelete;
