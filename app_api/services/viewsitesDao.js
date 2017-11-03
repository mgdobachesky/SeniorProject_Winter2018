// Required modules
var mongoose = require('mongoose');
var viewsites = mongoose.model('viewsite');

// ** CRUD OPERATIONS **

// Read operations
function viewsitesReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    viewsites.find({'userId': request.body.userId}).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve(results);
      }
    });
  });
  return promise;
}

function viewsitesReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    viewsites.findOne({'viewsiteName': request.params.viewsiteName}).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve(results);
      }
    });
  });
  return promise;
}

function viewsitesExists(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteName) {
      reject('Viewsite name is required!');
    } else {
      viewsites.findOne({'viewsiteName': request.params.viewsiteName}).exec(function(error, results) {
        if(error) {
          reject('Something went wrong!');
        } else if(!results) {
          resolve(false);
        } else if(results) {
          resolve(true);
        }
      });
    }
  });
  return promise;
}

// Create operations
function viewsitesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    viewsites.create({
      'userId': request.body.userId,
      'viewsiteName': request.body.viewsiteName,
      'loginEnabled': request.body.loginEnabled
    }, function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve('Viewsite created successfully!');
      }
    });
  });
  return promise;
}

// Update operations
function viewsitesUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    viewsites.findById(request.params.id).exec(function(error, viewsiteData) {
      if(!viewsiteData) {
        reject('ID not found!');
      } else if(error) {
        reject('Something went wrong!');
      } else {
        viewsiteData.viewsiteName = request.body.viewsiteName;
        viewsiteData.loginEnabled = request.body.loginEnabled;
        viewsiteData.save(function(error, results) {
          if(error) {
            reject('Something went wrong!');
          } else {
            resolve('Viewsite updated successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function viewsitesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    viewsites.findByIdAndRemove(request.params.id).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else {
        resolve('Viewsite deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.viewsitesReadAll = viewsitesReadAll;
module.exports.viewsitesReadOne = viewsitesReadOne;
module.exports.viewsitesExists = viewsitesExists;
module.exports.viewsitesCreate = viewsitesCreate;
module.exports.viewsitesUpdate = viewsitesUpdate;
module.exports.viewsitesDelete = viewsitesDelete;
