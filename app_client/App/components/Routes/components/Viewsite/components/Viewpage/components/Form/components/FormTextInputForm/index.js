// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import FormTextInputFormJSX from './FormTextInputForm.jsx';

class FormTextInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "formTextInput");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <FormTextInputFormJSX
        description={this.props.description}
        formTextInput={this.props.formTextInput}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default FormTextInputForm;
