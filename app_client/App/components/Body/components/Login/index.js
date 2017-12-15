// Import required modules
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Import required components
import LoginJSX from './Login.jsx';
import './login.css';

class Login extends React.Component {
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
      return(LoginJSX.call(this));
    }
  }
}

export default Login;
