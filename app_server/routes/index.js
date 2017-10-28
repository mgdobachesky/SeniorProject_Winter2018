// Require express module as a router
var express = require('express');
var router = express.Router();

// Require the controller script that this page routes to
var controller = require('../controllers/index');

// Set up routing for the controller
router.all('/', controller.cadre);

// Export the router to be used by the app
module.exports = router;
