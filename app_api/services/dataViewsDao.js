// Required modules
var mongoose = require('mongoose');
var dataView = mongoose.model('dataView');
var viewpages = mongoose.model('viewpage');

// ** CRUD OPERATIONS **

// Read operations
function dataViewsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.dataViewId) {
      reject('Data View ID is required!');
    } else {
      dataView.findOne({'_id': request.params.dataViewId}).populate({path: 'form', select: '-userId'}).populate('userTable').select('-userId').exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Data View not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function dataViewsReadAll(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      dataView.find({'viewpageId': request.params.viewpageId}).populate({path: 'form', select: '-userId'}).populate('userTable').select('-userId').exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Data Views found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function dataViewsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    viewpages.findById(request.body.viewpageId).exec(function(error, viewpageData) {
      if(viewpageData.userId != request.session.userId) {
        reject('You can only create Data Views for Viewpages you own!');
      } else if(!request.body.formId) {
        reject('All fields required!');
      } else {
        dataView.create({
          'userId': request.session.userId,
          'form': request.body.formId,
          'userTable': request.body.formId,
          'viewpageId': request.body.viewpageId
        }, function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Data View created successfully!');
          }
        });
      }
    });

  });
  return promise;
}

// Update operations
function dataViewsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.dataViewId) {
      reject('Data View ID is required!');
    } else {
      dataView.findById(request.params.dataViewId).exec(function(error, dataViewData) {
        if(!dataViewData) {
          reject('Data View not found!');
        } else if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(dataViewData.userId != request.session.userId) {
          reject('You can only update Data Views you own!');
        } else {
          dataViewData.form = request.body.formId;
          dataViewData.userTable = request.body.formId;
          dataViewData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve('Data View updated successfully!');
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
    if(!request.params.dataViewId) {
      reject('Data View ID is required!');
    }
    dataView.findById(request.params.dataViewId).exec(function(error, dataViewData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(dataViewData.userId != request.session.userId) {
        reject('You can only delete Data Views you own!');
      } else {
        dataView.findByIdAndRemove(request.params.dataViewId).exec(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            resolve('Data View deleted successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Export functions
module.exports.dataViewsReadOne = dataViewsReadOne;
module.exports.dataViewsReadAll = dataViewsReadAll;
module.exports.dataViewsCreate = dataViewsCreate;
module.exports.dataViewsUpdate = dataViewsUpdate;
module.exports.dataViewsDelete = dataViewsDelete;
