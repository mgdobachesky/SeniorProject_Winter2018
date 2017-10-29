// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');

// Create routes for interacting with the users collection
router.get('/users', controllerUsers.usersReadOne);
router.post('/users', controllerUsers.usersCreate);
router.put('/users/:id', controllerUsers.usersUpdateOne);
router.delete('/users/:id', controllerUsers.usersDeleteOne);

// Export the router
module.exports = router;
