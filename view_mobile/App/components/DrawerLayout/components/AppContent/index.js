// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import requred components
import AppContentJSX from './AppContent.js';

class AppContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(AppContentJSX.call(this));
  }
}

export default AppContent;
