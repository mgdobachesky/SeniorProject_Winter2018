// Required modules
var express = require('express');
var router = express.Router();
var controllerUsers = require('../controllers/users');
var controllerViewsites = require('../controllers/viewsites');
var controllerViewpages = require('../controllers/viewpages');
var controllerForms = require('../controllers/forms');
var controllerFormTextInputs = require('../controllers/formTextInputs');
var controllerUserDatabases = require('../controllers/userDatabases');
var controllerText = require('../controllers/text');
var controllerDataViews = require('../controllers/dataViews');

// Create routes for users
router.post('/login/users', controllerUsers.usersLogIn);
router.get('/read_one/users', controllerUsers.usersReadOne);
router.post('/create/users', controllerUsers.usersCreate);
router.put('/update/users', controllerUsers.usersUpdate);
router.delete('/delete/users', controllerUsers.usersDelete);
router.get('/exists/users/:username', controllerUsers.usersExists);
router.get('/logout/users', controllerUsers.usersLogout);
router.get('/is_logged_in/users', controllerUsers.usersIsLoggedIn);

// Create routes for viewsites
router.get('/read_one/viewsites/:viewsiteName', controllerViewsites.viewsitesReadOne);
router.get('/read_all/viewsites', controllerViewsites.viewsitesReadAll);
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

// Create routes for formTextInputs
router.get('/read_one/form_text_inputs/:formTextInputId', controllerFormTextInputs.formTextInputsReadOne);
router.get('/read_all/form_text_inputs/:formId', controllerFormTextInputs.formTextInputsReadAll);
router.post('/create/form_text_inputs', controllerFormTextInputs.formTextInputsCreate);
router.put('/update/form_text_inputs/:formTextInputId', controllerFormTextInputs.formTextInputsUpdate);
router.delete('/delete/form_text_inputs/:formTextInputId', controllerFormTextInputs.formTextInputsDelete);

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

// Create routes for dataViews
router.get('/read_one/data_view/:dataViewId', controllerDataViews.dataViewsReadOne);
router.get('/read_all/data_view/:viewpageId', controllerDataViews.dataViewsReadAll);
router.post('/create/data_view', controllerDataViews.dataViewsCreate);
router.put('/update/data_view/:dataViewId', controllerDataViews.dataViewsUpdate);
router.delete('/delete/data_view/:dataViewId', controllerDataViews.dataViewsDelete);

// Export the router
module.exports = router;
