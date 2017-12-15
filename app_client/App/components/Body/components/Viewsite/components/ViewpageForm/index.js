// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import ViewpageFormJSX from './ViewpageForm.jsx';
import './viewpageForm.css';

class ViewpageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "viewpage");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return(ViewpageFormJSX.call(this));
  }
}

export default ViewpageForm;
