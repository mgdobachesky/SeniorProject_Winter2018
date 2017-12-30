// Import required modules
import React from 'react';
import { H1, Content } from 'native-base';

// Import requred components
import TextView from './components/TextView';
import FormView from './components/FormView';
import DataView from './components/DataView';
import styles from './styles.js';

function ElementList(props) {
  if(props.elements) {
    return props.elements.map((element, index) => {
      if(element.kind === "text") {
        return (
          <TextView
          key={element._id}
          element={element} />
        );
      } else if(element.kind === "form") {
        return (
          <FormView
          key={element._id}
          element={element}
          viewsiteId={props.userDatabase._id}
          onRequestUserDatabase={props.onRequestUserDatabase} />
        );
      } else if(element.kind === "dataView") {
        return (
          <DataView
          key={element._id}
          element={element}
          userTables={props.userDatabase.tables} />
        );
      }
    });
  } else {
    return null;
  }
}

var ViewpageJSX = function() {
  return (
    <Content>
      <H1>
        {this.state.viewpage.viewpageName}
      </H1>

      <ElementList
      elements={this.state.viewpage.elements}
      userDatabase={this.props.userDatabase}
      onRequestUserDatabase={this.handleRequestUserDatabase} />
    </Content>
  );
}

export default ViewpageJSX;
