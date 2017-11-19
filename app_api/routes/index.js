// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');
var controllerViewsites = require('../controllers/viewsites');
var controllerViewpages = require('../controllers/viewpages');
var controllerForms = require('../controllers/forms');
var controllerFormFields = require('../controllers/formFields');
var controllerUserDatabases = require('../controllers/userDatabases');
var controllerText = require('../controllers/text');

// Create routes for users
router.post('/read_one/users', controllerUsers.usersReadOne);
router.post('/create/users', controllerUsers.usersCreate);
router.put('/update/users/:userId', controllerUsers.usersUpdate);
router.delete('/delete/users/:userId', controllerUsers.usersDelete);
router.get('/exists/users/:username', controllerUsers.usersExists);

// Create routes for viewsites
router.get('/read_one/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.get('/read_all/viewsites/:userId', controllerViewsites.viewsitesReadAll);
router.post('/create/viewsites', controllerViewsites.viewsitesCreate);
router.put('/update/viewsites/:viewsiteId', controllerViewsites.viewsitesUpdate);
router.delete('/delete/viewsites/:viewsiteId', controllerViewsites.viewsitesDelete);
router.get('/exists/viewsites/:viewsiteName', controllerViewsites.viewsitesExists);

// Create routes for viewpages
router.get('/read_one/viewpages/:viewpageId', controllerViewpages.viewpagesReadOne);
router.get('/read_all/viewpages/:viewsiteId', controllerViewpages.viewpagesReadAll);
router.post('/create/viewpages', controllerViewpages.viewpagesCreate);
router.put('/update/viewpages/:viewpageId', controllerViewpages.viewpagesUpdate);
router.delete('/delete/viewpages/:viewpageId', controllerViewpages.viewpagesDelete);

// Create routes for forms
router.get('/read_one/forms/:formId', controllerForms.formsReadOne);
router.get('/read_all/forms/viewsite/:viewsiteId', controllerForms.formsReadAllByViewsite);
router.get('/read_all/forms/viewpage/:viewpageId', controllerForms.formsReadAllByViewpage);
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

// Create routes for text
router.get('/read_one/text/:textId', controllerText.textReadOne);
router.get('/read_all/text/:viewpageId', controllerText.textReadAll);
router.post('/create/text', controllerText.textCreate);
router.put('/update/text/:textId', controllerText.textUpdate);
router.delete('/delete/text/:textId', controllerText.textDelete);

// Export the router
module.exports = router;
