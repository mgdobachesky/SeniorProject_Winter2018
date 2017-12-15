// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import required components
import DataViewJSX from './DataView.js';

class DataView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(DataViewJSX.call(this));
  }
}

export default DataView;
