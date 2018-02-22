// Import required modules
import React from 'react';

// Import requred components
import Text from '../Text';
import Form from '../Form';
import DataView from '../DataView';
import Image from '../Image';

/*
 * Display each element based on Element kind
 * Used by LandingPageJSX
 */
function ElementsView(props) {
  if(props.elements) {
    return props.elements.map((element, index) => {
      if(element.kind === "text") {
        return (
          <Text
          key={element._id}
          element={element} />
        );
      } else if(element.kind === "form") {
        return (
          <Form
          key={element._id}
          viewsiteId={props.viewsiteId}
          element={element}
          userDatabase={props.userDatabase}
          onUpdateUserTable={props.onUpdateUserTable} />
        );
      } else if(element.kind === "dataView") {
        return (
          <DataView
          key={element._id}
          element={element}
          userForms={props.userForms}
          userDatabase={props.userDatabase} />
        );
      } else if(element.kind === "image") {
        return(
          <Image
          key={element._id}
          element={element} />
        );
      }
    });
  } else {
    return null;
  }
}

/*
 * Landing Page JSX view
 */
var LandingPageJSX = function() {
  let landingPage = {};
  if(this.props.landingPage && this.props.landingPage.kind == 'landingPage') {
    landingPage = this.props.landingPage;
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <div className="offset-1">
            <h1 className="display-3">
              {this.props.viewsite.viewsiteName}
            </h1>
            <p className="lead">
              {landingPage.catchPhrase}
            </p>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-10 offset-1">
          <ElementsView
          viewsiteId={this.props.viewsiteId}
          elements={landingPage.elements}
          userDatabase={this.props.userDatabase}
          userForms={this.props.userForms}
          onUpdateUserTable={this.handleUpdateUserTable} />
        </div>
      </div>
    </div>
  );
};

// Export the Landing Page JSX view
export default LandingPageJSX;
