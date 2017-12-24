// Required modules
var mongoose = require('mongoose');
var viewsites = mongoose.model('viewsite');

// ** CRUD OPERATIONS **

// Create operations
function dataViewsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId) {
      reject('Viewsite and Viewpage IDs are both required!');
    } else if(!request.body.formId) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to create a Data View!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(viewsiteData.userId != request.session.userId) {
          reject('You can only create Data Views for Viewsites you own!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.push({
            'kind': request.body.kind,
            'formId': request.body.formId
          });
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Update operations
function dataViewsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId || !request.body.elementId) {
      reject('Viewsite, Viewpage, and Element IDs are all required!');
    } else if(!request.body.formId) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to update a Data View!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only update Data Views you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId)) {
          reject('Element doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formId = request.body.formId;
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Delete operations
function dataViewsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId || !request.body.elementId) {
      reject('Viewsite, Viewpage, and Element IDs are all required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to delete a Data View!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only delete Data Views you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId)) {
          reject('Element doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).remove();
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Export functions
module.exports.dataViewsCreate = dataViewsCreate;
module.exports.dataViewsUpdate = dataViewsUpdate;
module.exports.dataViewsDelete = dataViewsDelete;
