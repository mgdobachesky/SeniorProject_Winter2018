// Include required modules
var mongoose = require('mongoose');
var viewsites = mongoose.model('viewsite');

/*
 * Method that allows Users to create Textbox Form Inputs
 */
function textboxesCreate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId || !request.body.elementId) {
      reject('Viewsite, Viewpage, and Element IDs are all required!');
    } else if(!request.body.textboxLabel) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to create a Textbox!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(viewsiteData.userId != request.session.userId) {
          reject('You can only create Textboxes for Viewsites you own!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formInputs.push({
            'kind': request.body.kind,
            'textboxLabel': request.body.textboxLabel
          });
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

/*
 * Method that allows Users to update Textbox Form Inputs
 */
function textboxesUpdate(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId || !request.body.elementId || !request.body.formInputId) {
      reject('Viewsite, Viewpage, Element, and Form Input IDs are all required!');
    } else if(!request.body.textboxLabel) {
      reject('All fields required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to update a Form!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only update Textboxes you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formInputs.id(request.body.formInputId)) {
          reject('Form Input doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formInputs.id(request.body.formInputId).textboxLabel = request.body.textboxLabel;
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

/*
 * Method that allows Users to delete Textbox Form Inputs
 */
function textboxesDelete(request) {
  var promise = new Promise(function(resolve, reject) {
    if(!request.body.viewsiteId || !request.body.viewpageId || !request.body.elementId || !request.body.formInputId) {
      reject('Viewsite, Viewpage, Element, and Form Input IDs are all required!');
    } else if(!request.session.userId) {
      reject('You must be logged in to delete a Form Input!');
    } else {
      viewsites.findById(request.body.viewsiteId)
      .exec(function(error, viewsiteData) {
        if(error) {
          console.log(error.message);
          reject('Something went wrong!');
        } else if(!viewsiteData) {
          reject('Viewsite not found!');
        } else if(viewsiteData.userId != request.session.userId) {
          reject('You can only delete Form Inputs you own!');
        } else if(!viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formInputs.id(request.body.formInputId)) {
          reject('Form Input doesn\'t exist!');
        } else {
          viewsiteData.viewpages.id(request.body.viewpageId).elements.id(request.body.elementId).formInputs.id(request.body.formInputId).remove();
          viewsiteData.save(function(error, results) {
            if(error) {
              console.log(error.message);
              reject('Something went wrong!');
            } else {
              var cleanResults = results.toObject();
              delete cleanResults.userId;
              delete cleanResults.__v;
              resolve(cleanResults);
            }
          });
        }
      });
    }
  });
  return promise;
}

// Export public methods
module.exports.textboxesCreate = textboxesCreate;
module.exports.textboxesUpdate = textboxesUpdate;
module.exports.textboxesDelete = textboxesDelete;
