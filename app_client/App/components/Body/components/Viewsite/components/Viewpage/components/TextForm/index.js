// Import required modules
import React from 'react';

// Import required components
import TextFormJSX from './TextForm.jsx';
import './textForm.css';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "text");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return(TextFormJSX.call(this));
  }
}

export default TextForm;
