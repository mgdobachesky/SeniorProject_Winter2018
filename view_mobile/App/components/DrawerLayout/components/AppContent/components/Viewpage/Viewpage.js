// Import required modules
import React from 'react';
import { H1, Content, Text } from 'native-base';

// Import requred components
import TextView from '../TextView';
import FormView from '../FormView';
import DataView from '../DataView';
import ImageView from '../ImageView';
import HeaderView from '../HeaderView';
import styles from './styles.js';

/*
 * List of Elements owned by selected Viewpage, sorted by kind
 * Used by ViewpageJSX
 */
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
          viewsiteId={props.viewsiteId}
          onUpdateUserTable={props.onUpdateUserTable} />
        );
      } else if(element.kind === "dataView") {
        return (
          <DataView
          key={element._id}
          element={element}
          userDatabase={props.userDatabase}
          userForms={props.userForms} />
        );
      } else if (element.kind === "image") {
        return (
          <ImageView
          key={element._id}
          element={element} />
        );
      } else if (element.kind === "header") {
        return (
          <HeaderView
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
 * Viewpage JSX view
 */
var ViewpageJSX = function() {
  return (
    <Content>
      <ElementList
      viewsiteId={this.props.viewsiteId}
      elements={this.state.viewpage.elements}
      userDatabase={this.props.userDatabase}
      userForms={this.props.userForms}
      onUpdateUserTable={this.handleUpdateUserTable} />
    </Content>
  );
}

// Export Viewpage JSX view
export default ViewpageJSX;
