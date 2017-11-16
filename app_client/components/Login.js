// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event, "user");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target);
  }

  render() {
    const username = this.props.user.username;
    const password = this.props.user.password;

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" className="form-control" id="username" placeholder="Enter Username" value={username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
