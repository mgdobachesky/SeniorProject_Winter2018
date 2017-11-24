// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import requred components
import RoutesJSX from './Routes.js';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(RoutesJSX.call(this));
  }
}

export default Routes;
