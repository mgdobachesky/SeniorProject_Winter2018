// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');

// Create routes for interacting with the users collection
router.get('/users', controllerUsers.usersLogin);
router.get('/users/:username', controllerUsers.usersExists);
router.post('/users', controllerUsers.usersCreate);
router.put('/users/:id', controllerUsers.usersUpdate);
router.delete('/users/:id', controllerUsers.usersDelete);

// Export the router
module.exports = router;
