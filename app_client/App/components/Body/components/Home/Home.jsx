// Import required modules
import React from 'react';

/*
 * Home view
 */
var HomeJSX = function() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <div className="text-center">
            <div className="row">
            <div className="col-md-4"></div>
              <div className="col-md-4">
                <img src="/logo.png" className="img-fluid height:auto max-width: 50%"/>
              </div>
              <div className="col-md-4"></div>
            </div>
            <h1 className="display-3">
              Cadre
            </h1>
            <p className="lead">
              The place where anyone can make a Website.
            </p>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
}

// Export the Home view
export default HomeJSX;
