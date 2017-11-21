// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import UserFormJSX from './UserForm.jsx';
import './userForm.css';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "user");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target);
  }

  render() {
    return (
      <UserFormJSX
        description={this.props.description}
        user={this.props.user}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    );
  }
}

export default UserForm;
