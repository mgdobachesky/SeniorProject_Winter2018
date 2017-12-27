// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import required components
import LoginJSX from './Login.jsx';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      loginCredentials: {
        username: "",
        password: ""
      }
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let changeLoginCredentials = this.state.loginCredentials;
    changeLoginCredentials[name] = value;
    this.setState({
      'loginCredentials': changeLoginCredentials
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let loginCredentials = this.state.loginCredentials;
    this.props.onLoginUser(loginCredentials);
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
