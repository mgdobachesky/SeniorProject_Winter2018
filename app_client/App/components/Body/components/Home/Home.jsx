// Import required modules
import React from 'react';

/*
 * Home view
 */
var HomeJSX = function() {
  return (
      <div className="container-fluid">
          {/*Row 1, Logo and Info section*/}
          <div className="row">
            <div className="col-md-3"></div>

            <div className="col-md-3">
              <img src="/logo.png" className="img-fluid height:auto max-width:80%" />
            </div>

            <div className="col-md-4 info">
                  <h2>Welcome to Cadre!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

            <div className="col-md-3"></div>
          </div>

          {/*Row 2, Features 1 & 2*/}
          <div className="row">

              <div className="col-md-3 featureCard">

                  <h4>Feature 1</h4>
                  <div className="row">

                    <div className="col-md-3">
                        <img src="/logo.png" className="samplePic" />
                    </div>
                    <div className="col-md-9">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>

              </div>


              <div className="col-md-3 featureCard">
                  <h4>Feature 2</h4>
                  <div className="row">

                      <div className="col-md-3">
                          <img src="/logo.png" className="samplePic" />
                      </div>
                      <div className="col-md-9">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                  </div>


              </div>

          </div>


          {/*Row 3, Features 3 & 4*/}
          <div className="row">

              <div className="col-md-3 featureCard">

                  <h4>Feature 3</h4>
                  <div className="row">

                      <div className="col-md-3">
                          <img src="/logo.png" className="samplePic" />
                      </div>
                      <div className="col-md-9">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                  </div>

              </div>


              <div className="col-md-3 featureCard">
                  <h4>Feature 4</h4>
                  <div className="row">

                      <div className="col-md-3">
                          <img src="/logo.png" className="samplePic" />
                      </div>
                      <div className="col-md-9">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                  </div>


              </div>

          </div>
      </div>
  );
}

// Export the Home view
export default HomeJSX;
