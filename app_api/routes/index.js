// Required modules
var express = require('express');
var router = express.Router();

// Import Users controllers
var controllerUsers = require('../controllers/users/users');

// Import Viewsites controllers
var controllerViewsites = require('../controllers/viewsites/viewsites');
var controllerViewpages = require('../controllers/viewsites/viewpages');
var controllerText = require('../controllers/viewsites/text');
var controllerForms = require('../controllers/viewsites/forms');
var controllerTextboxes = require('../controllers/viewsites/textboxes');
var controllerDataViews = require('../controllers/viewsites/dataViews');

// Import User Databases controllers
var controllerUserDatabases = require('../controllers/userDatabases/userDatabases');
var controllerUserTables = require('../controllers/userDatabases/userTables');
var controllerUserRecords = require('../controllers/userDatabases/userRecords');

/*
 * Users Routes
 */

// Create routes for users
router.get('/read_one/users', controllerUsers.usersReadOne);
router.post('/create/users', controllerUsers.usersCreate);
router.put('/update/users', controllerUsers.usersUpdate);
router.delete('/delete/users', controllerUsers.usersDelete);
router.post('/login/users', controllerUsers.usersLogIn);
router.get('/logout/users', controllerUsers.usersLogout);

/*
 * Viewsites Routes
 */

// Create routes for viewsites
router.get('/read_one/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.get('/read_all/viewsites', controllerViewsites.viewsitesReadAll);
router.post('/create/viewsites', controllerViewsites.viewsitesCreate);
router.put('/update/viewsites', controllerViewsites.viewsitesUpdate);
router.delete('/delete/viewsites', controllerViewsites.viewsitesDelete);

// Create routes for viewpages
router.post('/create/viewpages', controllerViewpages.viewpagesCreate);
router.put('/update/viewpages', controllerViewpages.viewpagesUpdate);
router.delete('/delete/viewpages', controllerViewpages.viewpagesDelete);

// Create routes for text
router.post('/create/text', controllerText.textCreate);
router.put('/update/text', controllerText.textUpdate);
router.delete('/delete/text', controllerText.textDelete);

// Create routes for forms
router.post('/create/forms', controllerForms.formsCreate);
router.put('/update/forms', controllerForms.formsUpdate);
router.delete('/delete/forms', controllerForms.formsDelete);

// Create routes for textboxes
router.post('/create/textboxes', controllerTextboxes.textboxesCreate);
router.put('/update/textboxes', controllerTextboxes.textboxesUpdate);
router.delete('/delete/textboxes', controllerTextboxes.textboxesDelete);

// Create routes for dataViews
router.post('/create/data_views', controllerDataViews.dataViewsCreate);
router.put('/update/data_views', controllerDataViews.dataViewsUpdate);
router.delete('/delete/data_views', controllerDataViews.dataViewsDelete);

/*
 * User Databases Routes
 */

// Create routes for userDatabases
router.get('/read_all/user_databases', controllerUserDatabases.userDatabasesReadAll);
router.post('/read_one/user_databases', controllerUserDatabases.userDatabasesReadOne);

// Create routes for userTables
router.post('/read_one/user_tables', controllerUserTables.userTablesReadOne);

// Create routes for userRecords
router.post('/create/user_records', controllerUserRecords.userRecordsCreate);
router.put('/update/user_records', controllerUserRecords.userRecordsUpdate);
router.delete('/delete/user_records', controllerUserRecords.userRecordsDelete);

// Export the router
module.exports = router;
