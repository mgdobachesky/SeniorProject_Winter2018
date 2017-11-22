// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import FormTextInputJSX from './FormTextInput.jsx';
import './formTextInput.css';

class FormTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "record")
  }

  render() {
    return(FormTextInputJSX.call(this));
  }
}

export default FormTextInput;
