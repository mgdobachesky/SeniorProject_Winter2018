// Import required modules
import React from 'react';

// Import required components
import FormFormJSX from './FormForm.jsx';
import './formForm.css';

class FormForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "form");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit("form");
  }

  render() {
    return(FormFormJSX.call(this));
  }
}

export default FormForm;
