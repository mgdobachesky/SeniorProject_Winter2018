// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import TextFormJSX from './TextForm.jsx';

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
    return (
      <TextFormJSX
        description={this.props.description}
        text={this.props.text}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default TextForm;
