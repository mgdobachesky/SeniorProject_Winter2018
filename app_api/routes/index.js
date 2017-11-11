// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');
var controllerViewsites = require('../controllers/viewsites');
var controllerViewpages = require('../controllers/viewpages');
var controllerElements = require('../controllers/elements');
var controllerForms = require('../controllers/forms');
var controllerFormFields = require('../controllers/formFields');
var controllerUserDatabases = require('../controllers/userDatabases');

// Create routes for users
router.post('/read_one/users', controllerUsers.usersReadOne);
router.post('/create/users', controllerUsers.usersCreate);
router.put('/update/users/:userId', controllerUsers.usersUpdate);
router.delete('/delete/users/:userId', controllerUsers.usersDelete);
//router.get('/exists/users/:username', controllerUsers.usersExists);

// Create routes for viewsites
router.get('/read_one/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.get('/read_all/viewsites/:userId', controllerViewsites.viewsitesReadAll);
router.post('/create/viewsites', controllerViewsites.viewsitesCreate);
router.put('/update/viewsites/:viewsiteId', controllerViewsites.viewsitesUpdate);
router.delete('/delete/viewsites/:viewsiteId', controllerViewsites.viewsitesDelete);
//router.get('/exists/viewsites/:viewsiteName', controllerViewsites.viewsitesExists);

// Create routes for viewpages
router.get('/read_one/viewpages/:viewpageId', controllerViewpages.viewpagesReadOne);
router.get('/read_all/viewpages/:viewsiteId', controllerViewpages.viewpagesReadAll);
router.post('/create/viewpages', controllerViewpages.viewpagesCreate);
router.put('/update/viewpages/:viewpageId', controllerViewpages.viewpagesUpdate);
router.delete('/delete/viewpages/:viewpageId', controllerViewpages.viewpagesDelete);

// Create routes for elements
router.get('/read_one/elements/:elementId', controllerElements.elementsReadOne);
router.get('/read_all/elements/:viewpageId', controllerElements.elementsReadAll);
router.post('/create/elements', controllerElements.elementsCreate);
router.put('/update/elements/:elementId', controllerElements.elementsUpdate);
router.delete('/delete/elements/:elementId', controllerElements.elementsDelete);

// Create routes for forms
router.get('/read_one/forms/:formId', controllerForms.formsReadOne);
router.get('/read_all/forms/:viewsiteId', controllerForms.formsReadAll);
router.post('/create/forms', controllerForms.formsCreate);
router.put('/update/forms/:formId', controllerForms.formsUpdate);
router.delete('/delete/forms/:formId', controllerForms.formsDelete);

// Create routes for formFields
router.get('/read_one/form_fields/:formFieldId', controllerFormFields.formFieldsReadOne);
router.get('/read_all/form_fields/:formId', controllerFormFields.formFieldsReadAll);
router.post('/create/form_fields', controllerFormFields.formFieldsCreate);
router.put('/update/form_fields/:formFieldId', controllerFormFields.formFieldsUpdate);
router.delete('/delete/form_fields/:formFieldId', controllerFormFields.formFieldsDelete);

// Create routes for userDatabases
router.get('/read_one/user_records/:recordId', controllerUserDatabases.userRecordsReadOne);
router.get('/read_all/user_records/:formId', controllerUserDatabases.userTablesReadOne);
router.post('/create/user_records/:formId', controllerUserDatabases.userRecordsCreate);
router.put('/update/user_records/:recordId', controllerUserDatabases.userRecordsUpdate);
router.delete('/delete/user_records/:recordId', controllerUserDatabases.userRecordsDelete);
//router.post('/create/user_tables/:formId', controllerUserDatabases.userTablesCreate);
//router.delete('/delete/user_tables/:formId', controllerUserDatabases.userTablesDelete);

// Export the router
module.exports = router;
