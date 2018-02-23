// Include required modules
var mongoose = require('mongoose');
var viewsites = mongoose.model('viewsite');

/*
 * Method that allows Users to create Text Elements
 */
function headerCreate(request) {
    var promise = new Promise(function(resolve, reject) {
        if(!request.body.viewsiteId || !request.body.viewpageId) {
            // Required IDs
            reject('Viewsite and Viewpage IDs are both required!');
        } else if(!request.body.headerValue) {
            // Required fields
            reject('All fields required!');
        } else if(!request.session.userId) {
            // Make sure a User is logged in
            reject('You must be logged in to create Headers!');
        } else {
            // Find Viewsite to add Text Element to
            viewsites.findById(request.body.viewsiteId)
                .exec(function(error, viewsiteData) {
                    if(viewsiteData.userId != request.session.userId) {
                        // Make sure User owns Viewsite
                        reject('You can only create Headers for Viewsites you own!');
                    } else if(!viewsiteData) {
                        // Handle non-existent query results
                        reject('Viewsite not found!');
                    } else {
                        // Push a new Text Element onto the Viewsite's Viewpage
                        viewsiteData.viewpages.id(request.body.viewpageId).elements.push({
                            'kind': request.body.kind,
                            'headerValue': request.body.headerValue
                        });
                        // Save updated Viewsite
                        viewsiteData.save(function(error, results) {
                            if(error) {
                                // Handle unknown errors
                                console.log(error.message);
                                reject('Something went wrong!');
                            } else {
                                // Clean up results and return up-to-date Viewsite
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
 * Method that allows Users to update Text Elements
 */
function headerUpdate(request) {
    var promise = new Promise(function(resolve, reject) {
        if(!request.body.viewsiteId
            || !request.body.viewpageId
            || !request.body.elementId) {
            // Required IDs
            reject('Viewsite, Viewpage, and Element IDs are all required!');
        } else if(!request.body.headerValue) {
            // Required fields
            reject('All fields required!');
        } else if(!request.session.userId) {
            // Be sure a User is logged in
            reject('You must be logged in to update Text!');
        } else {
            // Find Viewsite that has a Text Element to update
            viewsites.findById(request.body.viewsiteId)
                .exec(function(error, viewsiteData) {
                    if(error) {
                        // Handle unknown errors
                        console.log(error.message);
                        reject('Something went wrong!');
                    } else if(!viewsiteData) {
                        // Handle non-existent query results
                        reject('Viewsite not found!');
                    } else if(viewsiteData.userId != request.session.userId) {
                        // Make sure User owns Viewsite
                        reject('You can only update Text you own!');
                    } else if(!viewsiteData
                            .viewpages.id(request.body.viewpageId)
                            .elements.id(request.body.elementId)) {
                        // Handle non-existent sub-documents
                        reject('Element doesn\'t exist!');
                    } else {
                        // Set updated fields
                        viewsiteData
                            .viewpages.id(request.body.viewpageId)
                            .elements.id(request.body.elementId)
                            .headerValue = request.body.headerValue;
                        // Save updated Viewsite with new Text Element data
                        viewsiteData.save(function(error, results) {
                            if(error) {
                                // Handle unknown errors
                                console.log(error.message);
                                reject('Something went wrong!');
                            } else {
                                // Clean up the results and return up-to-date Viewsite
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
 * Method that allows Users to delete Text Elements
 */
function headerDelete(request) {
    var promise = new Promise(function(resolve, reject) {
        if(!request.body.viewsiteId
            || !request.body.viewpageId
            || !request.body.elementId) {
            // Required IDs
            reject('Viewsite, Viewpage, and Element IDs are all required!');
        } else if(!request.session.userId) {
            // Make sure a User is logged in
            reject('You must be logged in to delete Text!');
        } else {
            // Find Viewsite with Text Element to remove
            viewsites.findById(request.body.viewsiteId)
                .exec(function(error, viewsiteData) {
                    if(error) {
                        // Handle unknown errors
                        console.log(error.message);
                        reject('Something went wrong!');
                    } else if(!viewsiteData) {
                        // Handle non-existent query results
                        reject('Viewsite not found!');
                    } else if(viewsiteData.userId != request.session.userId) {
                        // Make sure User owns Viewsite
                        reject('You can only delete Text you own!');
                    } else if(!viewsiteData
                            .viewpages.id(request.body.viewpageId)
                            .elements.id(request.body.elementId)) {
                        // Handle non-existent sub-documents
                        reject('Element doesn\'t exist!');
                    } else {
                        // Otherwise, remove the Text element from the Viewsite's Viewpage
                        viewsiteData
                            .viewpages.id(request.body.viewpageId)
                            .elements.id(request.body.elementId).remove();
                        // Save updated Viewsite
                        viewsiteData.save(function(error, results) {
                            if(error) {
                                // Handle unknown errors
                                console.log(error.message);
                                reject('Something went wrong!');
                            } else {
                                // Clean up results and return up-to-date Viewsite
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
module.exports.headerCreate = headerCreate;
module.exports.headerUpdate = headerUpdate;
module.exports.headerDelete = headerDelete;
