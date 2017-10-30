// Require required modules
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var users = mongoose.model('user');

// ** CRUD OPERATIONS **

// Read one
function usersReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.username) {
      reject('Something went wrong!');
    } else {
      users.findOne({'username': request.body.username}).exec(function(error, results) {
        if(error || !results) {
          reject('Something went wrong!');
        } else {
          bcrypt.compare(request.body.password, results.password, function(error, match) {
            if(!match) {
              reject('Something went wrong!');
            } else {
              resolve({
                "_id": results._id,
                "username": results.username
              });
            }
          });
        }
      });
    }
  });
  return promise;
}

// Create
function usersCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    bcrypt.hash(request.body.password, 10, function(error, hash) {
      if(error) {
        reject('Something went wrong!');
      } else {
        users.create({
          'username': request.body.username,
          'password': hash
        }, function(error, results) {
          if(error) {
            reject('Something went wrong!');
          } else {
            resolve('User created successfully!');
          }
        });
      }
    });
  });
  return promise;
}

// Update
function usersUpdateOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('Something went wrong!');
    }
    users.findById(request.params.id).exec(function(error, userData) {
      if(!userData) {
        reject('Something went wrong!');
      } else if (error) {
        reject('Something went wrong!');
      }
      userData.username = request.body.username;
      if(request.body.password) {
        bcrypt.hash(request.body.password, 10, function(error, hash) {
          if(error) {
            reject('Something went wrong!');    
          }
          userData.password = hash;
        });
      }
      userData.save(function(error, results) {
        if(error) {
          reject('Something went wrong!');
        } else {
          resolve('User updated successfuly!');
        }
      });
    });
  });
  return promise;
}

// Delete
function usersDeleteOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('Something went wrong!');
    }
    users.findByIdAndRemove(request.params.id).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else if(!results) {
        reject('Something went wrong!');
      } else {
        resolve('User deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.usersReadOne = usersReadOne;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdateOne = usersUpdateOne;
module.exports.usersDeleteOne = usersDeleteOne;
