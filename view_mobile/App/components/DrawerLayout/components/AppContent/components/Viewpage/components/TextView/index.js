// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import required components
import TextViewJSX from './TextView.js';

class TextView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(TextViewJSX.call(this));
  }
}

export default TextView;
