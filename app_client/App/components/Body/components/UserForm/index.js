// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

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
    if(this.props.loggedIn) {
      return(<Redirect to="/" />);
    } else {
      return (UserFormJSX.call(this));
    }
  }
}

export default UserForm;
