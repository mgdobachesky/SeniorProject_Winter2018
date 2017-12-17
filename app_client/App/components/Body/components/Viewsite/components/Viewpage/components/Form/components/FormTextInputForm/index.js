// Import required modules
import React from 'react';

// Import required components
import FormTextInputFormJSX from './FormTextInputForm.jsx';
import './formTextInputForm.css';

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
    return(FormTextInputFormJSX.call(this));
  }
}

export default FormTextInputForm;
