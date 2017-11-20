// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import ViewsiteFormJSX from './ViewsiteForm.jsx';

class ViewsiteForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "viewsite");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <ViewsiteFormJSX
        viewsite={this.props.viewsite}
        description={this.props.description}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange} />
    );
  }
}

export default ViewsiteForm;
