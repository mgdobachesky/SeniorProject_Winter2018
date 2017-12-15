// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import required components
import FormTextInputJSX from './FormTextInput.js';

class FormTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.props.onChange(text, this.props.formTextInput._id)
  }

  render() {
    return(FormTextInputJSX.call(this));
  }
}

export default FormTextInput;
