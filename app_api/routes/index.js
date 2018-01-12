// Include required modules
var express = require('express');
var router = express.Router();

// Import Users controllers
var controllerUsers = require('../controllers/users/users');

// Import Viewsites controllers
var controllerViewsites = require('../controllers/viewsites/viewsites');
var controllerViewpages = require('../controllers/viewsites/viewpages');
var controllerElements = require('../controllers/viewsites/elements');
var controllerFormInputs = require('../controllers/viewsites/formInputs');

// Import User Databases controllers
var controllerUserDatabases = require('../controllers/userDatabases/userDatabases');
var controllerUserTables = require('../controllers/userDatabases/userTables');
var controllerUserRecords = require('../controllers/userDatabases/userRecords');

/*
 * Routes for public User methods
 */
router.get('/read_one/users', controllerUsers.usersReadOne);
router.post('/create/users', controllerUsers.usersCreate);
router.put('/update/users', controllerUsers.usersUpdate);
router.delete('/delete/users', controllerUsers.usersDelete);
router.post('/login/users', controllerUsers.usersLogIn);
router.get('/logout/users', controllerUsers.usersLogout);

/*
 * Routes for public Viewsite methods
 */
router.get('/read_one/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.get('/read_all/viewsites', controllerViewsites.viewsitesReadAll);
router.post('/create/viewsites', controllerViewsites.viewsitesCreate);
router.put('/update/viewsites', controllerViewsites.viewsitesUpdate);
router.delete('/delete/viewsites', controllerViewsites.viewsitesDelete);

/*
 * Routes for public Viewpage methods
 */
router.post('/create/viewpages', controllerViewpages.viewpagesCreate);
router.put('/update/viewpages', controllerViewpages.viewpagesUpdate);
router.delete('/delete/viewpages', controllerViewpages.viewpagesDelete);

/*
 * Routes for public Element methods
 */
router.post('/create/elements', controllerElements.elementsCreate);
router.put('/update/elements', controllerElements.elementsUpdate);
router.delete('/delete/elements', controllerElements.elementsDelete);

/*
 * Routes for public Form Input methods
 */
router.post('/create/form_inputs', controllerFormInputs.formInputsCreate);
router.put('/update/form_inputs', controllerFormInputs.formInputsUpdate);
router.delete('/delete/form_inputs', controllerFormInputs.formInputsDelete);

/*
 * Routes for public User Database methods
 */
router.post('/read_one/user_databases', controllerUserDatabases.userDatabasesReadOne);

/*
 * Routes for public User Table methods
 */
router.post('/read_one/user_tables', controllerUserTables.userTablesReadOne);

/*
 * Routes for public User Record methods
 */
router.post('/create/user_records', controllerUserRecords.userRecordsCreate);
router.put('/update/user_records', controllerUserRecords.userRecordsUpdate);
router.delete('/delete/user_records', controllerUserRecords.userRecordsDelete);

/*
 * Handle unmatched requests
 */
router.all('*', function(request, response) {
  console.log("Invalid API route!");
});

// Export the router
module.exports = router;
