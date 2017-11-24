// Import required modules
import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
    <View>
      <Text>{this.state.viewpage.viewpageName}</Text>
      <TextList texts={this.state.texts} />
      <FormList forms={this.state.forms} />
      <DataViewList dataViews={this.state.dataViews} />
    </View>
  );
}

export default ViewpageJSX;
