// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import DataViewJSX from './DataView.jsx';
import './dataView.css';

class DataView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(DataViewJSX.call(this));
  }
}

export default DataView;
