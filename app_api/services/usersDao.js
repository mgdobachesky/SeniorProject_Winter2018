// Require required modules
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var users = mongoose.model('user');

// ** CRUD OPERATIONS **

// Read operations
function usersReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.username) {
      reject('Username is required!');
    } else {
      users.findOne({'username': request.body.username}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User not found!');
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

// Create operations
function usersCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    request.params.username = request.body.username;
    usersExists(request).then(function(results) {
      if(!request.body.username || !request.body.password) {
        reject('Username and Password are both required!');
      } else {
        bcrypt.hash(request.body.password, 10, function(error, hash) {
          if(error) {
            console.log(error.message);
            reject('Something went wrong!');
          } else {
            users.create({
              'username': request.body.username,
              'password': hash
            }, function(error, results) {
              if(error) {
                console.log(error.message);
                reject('Something went wrong!');
              } else {
                resolve('User created successfully!');
              }
            });
          }
        });
      }
    }, function(error) {
      reject('Username already exists!');
    });
  });
  return promise;
}

// Update operations
function usersUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.userId) {
      reject('User ID is required!');
    }
    users.findById(request.params.userId).exec(function(error, userData) {
      if(!userData) {
        reject('User not found!');
      } else if (error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else {
        if(userData.username != request.body.username) {
          request.params.username = request.body.username;
          usersExists(request).then(function(results) {
            userData.username = request.body.username;
            if(request.body.password) {
              let hash = bcrypt.hashSync(request.body.password, 10);
              userData.password = hash;
            }
            userData.save(function(error, results) {
              if(error) {
                console.log(error.message);
                reject('Something went wrong!');
              } else {
                resolve('User updated successfully!');
              }
            });
          }, function(error) {
            reject('Username already exists!');
          });
        } else {
          userData.username = request.body.username;
          if(request.body.password) {
            let hash = bcrypt.hashSync(request.body.password, 10);
            userData.password = hash;
          }
          userData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              resolve('User updated successfully!');
            }
          });
        }
      }
    });
  });
  return promise;
}

// Delete operations
function usersDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.userId) {
      reject('User ID is required!');
    }
    users.findByIdAndRemove(request.params.userId).exec(function(error, results) {
      if(error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(!results) {
        reject('User not found!');
      } else {
        resolve('User deleted successfully!');
      }
    });
  });
  return promise;
}

// Method to check if a user exists
function usersExists(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.params.username) {
      reject('Username required!');
    } else {
      users.findOne({'username': request.params.username}).exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          resolve('Username is available!');
        } else if(results) {
          reject('Username already exists!');
        }
      });
    }
  });
  return promise;
}

// Export functions
module.exports.usersReadOne = usersReadOne;
module.exports.usersCreate = usersCreate;
module.exports.usersUpdate = usersUpdate;
module.exports.usersDelete = usersDelete;
module.exports.usersExists = usersExists;
