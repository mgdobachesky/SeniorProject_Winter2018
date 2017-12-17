// Import required modules
import React from 'react';

// Import requred components
import Text from './components/Text';
import Form from './components/Form';
import DataView from './components/DataView';

// Create list of Text a Viewpage owns
function TextList(props) {
  if(props.texts) {
    return props.texts.map((text, index) => {
      return (
        <Text key={text._id} text={text} />
      );
    });
  } else {
    return null;
  }
}

// Create list of forms a Viewpage owns
function FormList(props) {
  if(props.forms) {
    return props.forms.map((form, index) => {
      return (
        <Form key={form._id} form={form} />
      );
    });
  } else {
    return null;
  }
}

// Create list of Data-Views a Viewpage owns
function DataViewList(props) {
  if(props.dataViews) {
    return props.dataViews.map((dataView, index) => {
      if(dataView.form) {
        return (
          <DataView key={dataView._id} dataView={dataView} />
        );
      }
    });
  } else {
    return null;
  }
}

var ViewpageJSX = function() {
  return (
    <div className="container">
      <h1>{this.state.viewpage.viewpageName}</h1>
      <TextList texts={this.state.texts} />
      <FormList forms={this.state.forms} />
      <DataViewList dataViews={this.state.dataViews} />
    </div>
  );
}

export default ViewpageJSX;
