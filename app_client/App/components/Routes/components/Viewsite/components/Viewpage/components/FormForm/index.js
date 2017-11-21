// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import FormFormJSX from './FormForm.jsx';

class FormForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "form");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <FormFormJSX
        description={this.props.description}
        form={this.props.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default FormForm;
