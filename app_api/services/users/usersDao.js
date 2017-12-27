// Require required modules
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var users = mongoose.model('user');

// Required DAOs for cross collection operations
var viewsitesDao = require('../viewsites/viewsitesDao');
var userDatabasesDao = require('../userDatabases/userDatabasesDao');

// ** CRUD OPERATIONS **

// Read operations
function usersReadOne(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.session.userId) {
      reject('User ID is required!');
    } else {
      users.findOne({'_id': request.session.userId})
      .select('-_id -password -__v')
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User not found!');
        } else {
          results.password = "";
          resolve(results);
        }
      });
    }
  });
  return promise;
}

// Create operations
function usersCreate(request) {
  var promise = new Promise(function(resolve, reject) {
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
              if(error.message === 'There was a duplicate key error') {
                reject('Username already exists!');
              } else {
                reject('Something went wrong!');
              }
            } else {
              request.session.userId = results._id;
              var cleanResults = results.toObject();
              delete cleanResults._id;
              delete cleanResults.password;
              delete cleanResults.__v;
              cleanResults.password = "";
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
function usersUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.session.userId) {
      reject('User ID is required!');
    }
    users.findById(request.session.userId)
    .exec(function(error, userData) {
      if (error) {
        console.log(error.message);
        reject('Something went wrong!');
      } else if(!userData) {
        reject('User not found!');
      } else {
        userData.username = request.body.username;
        if(request.body.password) {
          let hash = bcrypt.hashSync(request.body.password, 10);
          userData.password = hash;
        }
        userData.save(function(error, results) {
          if(error) {
            console.log(error.message);
            if(error.message === 'There was a duplicate key error') {
              reject('Username already exists!');
            } else {
              reject('Something went wrong!');
            }
          } else {
            var cleanResults = results.toObject();
            delete cleanResults._id;
            delete cleanResults.password;
            delete cleanResults.__v;
            cleanResults.password = "";
            resolve(cleanResults);
          }
        });
      }
    });
  });
  return promise;
}

// Delete operations
function usersDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.session.userId) {
      reject('User ID is required!');
    } else {
      users.findByIdAndRemove(request.session.userId)
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('User not found!');
        } else {
          viewsitesDao.viewsitesDeleteAll(request)
          .then(function(results) {
            userDatabasesDao.userDatabasesDeleteAll(request)
            .then(function(results) {
              resolve({
                'username': "",
                'password': ""
              });
            }, function(error) {
              console.log(error.message);
              reject('Something went wrong!');
            });
          }, function(error) {
            console.log(error.message);
            reject('Something went wrong!');
          });
        }
      });
    }
  });
  return promise;
}

function usersLogIn(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.username || !request.body.password) {
      reject('Username and password are both required!');
    } else {
      users.findOne({'username': request.body.username})
      .exec(function(error, results) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!results) {
          reject('Username not found!');
        } else {
          bcrypt.compare(request.body.password, results.password, function(error, match) {
            if(!match) {
              reject('Wrong username or password!');
            } else {
              request.session.userId = results._id;
              var cleanResults = results.toObject();
              delete cleanResults._id;
              delete cleanResults.password;
              delete cleanResults.__v;
              cleanResults.password = "";
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

function usersLogout(request) {
  var promise = new Promise(function(resolve, reject) {
    if(request.session) {
      request.session.destroy(function(error) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else {
          resolve({
            'username': "",
            'password': ""
          });
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
module.exports.usersLogIn = usersLogIn;
module.exports.usersLogout = usersLogout;
