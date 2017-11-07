// Import required modules
import React, { Component } from 'react';
import UserService from '../services/UserService';

// Component for controlling User information
class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {userId: ""};
  }

  render() {

  }
}
export default LoginControl;
