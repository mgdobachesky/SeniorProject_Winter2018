// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');
var controllerViewsites = require('../controllers/viewsites');
var controllerViewpages = require('../controllers/viewpages');

// Create routes for interacting with the users collection
router.get('/users', controllerUsers.usersLogin);
router.post('/users', controllerUsers.usersCreate);
router.put('/users/:id', controllerUsers.usersUpdate);
router.delete('/users/:id', controllerUsers.usersDelete);

// Create routes for interacting with the viewsites collection
router.get('/viewsites', controllerViewsites.viewsitesReadAll);
router.get('/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.post('/viewsites', controllerViewsites.viewsitesCreate);
router.put('/viewsites/:id', controllerViewsites.viewsitesUpdate);
router.delete('/viewsites/:id', controllerViewsites.viewsitesDelete);

// Create routes for interacting with the viewpages collection
router.get('/viewpages', controllerViewpages.viewpagesReadAll);
router.get('/viewpages/:id', controllerViewpages.viewpagesReadOne);
router.post('/viewpages', controllerViewpages.viewpagesCreate);
router.put('/viewpages/:id', controllerViewpages.viewpagesUpdate);
router.delete('/viewpages/:id', controllerViewpages.viewpagesDelete);

// Create routes for checking if unique fields already exist
router.get('/exists/users/:username', controllerUsers.usersExists);
router.get('/exists/viewsites/:viewsiteName', controllerViewsites.viewsitesExists);

// Export the router
module.exports = router;
