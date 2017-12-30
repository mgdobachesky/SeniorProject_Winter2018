// Import required modules
import React from 'react';

// Import requred components
import Text from './components/Text';
import Form from './components/Form';
import DataView from './components/DataView';

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
          element={element}
          userDatabase={props.userDatabase}
          onRequestUserDatabase={props.onRequestUserDatabase} />
        );
      } else if(element.kind === "dataView") {
        return (
          <DataView
          key={element._id}
          element={element}
          userDatabase={props.userDatabase} />
        );
      }
    });
  } else {
    return null;
  }
}

var ViewpageJSX = function() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 offset-1">
          <h1>{this.props.viewpage.viewpageName}</h1>
          <ElementsView
          elements={this.props.viewpage.elements}
          userDatabase={this.props.userDatabase}
          onRequestUserDatabase={this.handleRequestUserDatabase} />
        </div>
      </div>
    </div>
  );
}

export default ViewpageJSX;
