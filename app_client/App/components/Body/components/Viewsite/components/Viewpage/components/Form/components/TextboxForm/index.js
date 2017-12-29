// Import required modules
import React from 'react';

// Import required components
import TextboxFormJSX from './TextboxForm.jsx';
import './textboxForm.css';

class TextboxForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "textbox");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit("textbox");
  }

  render() {
    return(TextboxFormJSX.call(this));
  }
}

export default TextboxForm;
