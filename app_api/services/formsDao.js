// Required modules
var mongoose = require('mongoose');
var forms = mongoose.model('form');
var userDatabasesDao = require('./userDatabasesDao');
var viewpages = mongoose.model('viewpage');

// ** CRUD OPERATIONS **

// Read operations
function formsReadAllByViewsite(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewsiteId) {
      reject('Viewsite ID is required!');
    } else {
      forms.find({'viewsiteId': request.params.viewsiteId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Forms found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function formsReadAllByViewpage(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.viewpageId) {
      reject('Viewpage ID is required!');
    } else {
      forms.find({'viewpageId': request.params.viewpageId})
      .select('-userId')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('No Forms found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

function formsReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      forms.findOne({'_id': request.params.formId})
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Form not found!');
        } else {
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function formsCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    viewpages.findById(request.body.viewpageId)
    .exec(function(error, viewpageData) {
      if(viewpageData.userId != request.session.userId) {
        reject('You can only create Forms for Viewpages you own!');
      } else if(!request.body.formTitle) {
        reject('All fields required!');
      } else {
        forms.create({
          'userId': request.session.userId,
          'viewsiteId': request.body.viewsiteId,
          'viewpageId': request.body.viewpageId,
          'formTitle': request.body.formTitle
        }, function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            let tableRequest = {params: {formId: results._id}};
            userDatabasesDao.userTablesCreate(tableRequest)
            .then(function(results) {
              resolve('Form created successfully!');
            }, function(error) {
              console.log(error.message);
              reject('Something went wrong!');
            });
          }
        });
      }
    });
  });
  return promise;
}

// Update operations
function formsUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    } else {
      forms.findById(request.params.formId)
      .exec(function(error, formData) {
        if(!formData) {
          reject('Form not found!');
        } else if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(formData.userId != request.session.userId) {
          reject('You can only update Forms you own!');
        } else {
          formData.formTitle = request.body.formTitle;
          formData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve('Form updated successfully!');
            }
          });
        }
      });
    }
  });
  return promise;
}

// Delete operations
function formsDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.formId) {
      reject('Form ID is required!');
    }
    forms.findById(request.params.formId)
    .exec(function(error, formData) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        forms.findByIdAndRemove(request.params.formId)
        .exec(function(error, results) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else if(formData.userId != request.session.userId) {
            reject('You can only delete Forms you own!');
          } else {
            userDatabasesDao.userTablesDelete(request)
            .then(function(results) {
              resolve('Form deleted successfully!');
            }, function(error) {
              console.log(error.message);
              reject('Something went wrong!');
            });
          }
        });
      }
    });
  });
  return promise;
}

// Export functions
module.exports.formsReadAllByViewsite = formsReadAllByViewsite;
module.exports.formsReadAllByViewpage = formsReadAllByViewpage;
module.exports.formsReadOne = formsReadOne;
module.exports.formsCreate = formsCreate;
module.exports.formsUpdate = formsUpdate;
module.exports.formsDelete = formsDelete;
