// Import required modules
import React from 'react';
import { Content, H1, H4, Text } from 'native-base';

// Import requred components
import TextView from '../TextView';
import FormView from '../FormView';
import DataView from '../DataView';
import ImageView from '../ImageView';
import styles from './styles.js';

/*
 * List of Elements owned by selected Viewpage, sorted by kind
 * Used by LandingPageJSX
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
  return (
    <Content>
      <H1>
        {this.props.viewsiteName}
      </H1>

      <H4>
        {this.props.landingPage.catchPhrase}
      </H4>

      <Text>
        {"\n"}
      </Text>

      <ElementList
      viewsiteId={this.props.viewsiteId}
      elements={this.props.landingPage.elements}
      userDatabase={this.props.userDatabase}
      userForms={this.props.userForms}
      onUpdateUserTable={this.handleUpdateUserTable} />
    </Content>
  );
}

// Export the Landing Page JSX view
export default LandingPageJSX;
