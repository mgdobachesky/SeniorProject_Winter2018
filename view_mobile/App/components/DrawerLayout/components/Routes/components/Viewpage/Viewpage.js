// Import required modules
import React, { Component } from 'react';
import { H1, Content } from 'native-base';
import { Link } from 'react-router-native';

// Import requred components
import TextView from './components/TextView';
import FormView from './components/FormView';
import DataView from './components/DataView';
import styles from './styles.js';

// Create list of Text a Viewpage owns
function TextList(props) {
  if(props.texts) {
    return props.texts.map((text, index) => {
      return (
        <TextView key={text._id} text={text} />
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
        <FormView key={form._id} form={form} />
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
    <Content>
      <H1>{this.state.viewpage.viewpageName}</H1>
      <TextList texts={this.state.texts} />
      <FormList forms={this.state.forms} />
      <DataViewList dataViews={this.state.dataViews} />
    </Content>
  );
}

export default ViewpageJSX;
