// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import DataViewFormJSX from './DataViewForm.jsx';
import './dataViewForm.css';

class DataViewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "dataView");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return(DataViewFormJSX.call(this));
  }
}

export default DataViewForm;