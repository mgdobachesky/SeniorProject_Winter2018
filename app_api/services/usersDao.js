// Require required modules
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var users = mongoose.model('user');

// ** CRUD OPERATIONS **

// Read operations
function usersLogin(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.username) {
      reject('Username required!');
    } else {
      users.findOne({'username': request.body.username}).exec(function(error, results) {
        if(error) {
          reject('Something went wrong!');
        } else if(!results) {
          reject('Username not found!');
        } else {
          bcrypt.compare(request.body.password, results.password, function(error, match) {
            if(!match) {
              reject('Wrong username or password!');
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

function usersExists(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.username) {
      reject('Username required!');
    } else {
      users.findOne({'username': request.params.username}).exec(function(error, results) {
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

// Update operations
function usersUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    users.findById(request.params.id).exec(function(error, userData) {
      if(!userData) {
        reject('ID not found!');
      } else if (error) {
        reject('Something went wrong!');
      }
      if(request.body.username) {
        userData.username = request.body.username;
      }
      if(request.body.password) {
        let hash = bcrypt.hashSync(request.body.password, 10);
        userData.password = hash;
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

// Delete operations
function usersDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.id) {
      reject('ID is required!');
    }
    users.findByIdAndRemove(request.params.id).exec(function(error, results) {
      if(error) {
        reject('Something went wrong!');
      } else if(!results) {
        reject('ID not found!');
      } else {
        resolve('User deleted successfully!');
      }
    });
  });
  return promise;
}

// Export functions
module.exports.usersLogin = usersLogin;
module.exports.usersExists = usersExists;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdate = usersUpdate;
module.exports.usersDelete = usersDelete;
