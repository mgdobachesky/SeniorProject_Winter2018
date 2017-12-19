// Import required modules
import React from 'react';

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
