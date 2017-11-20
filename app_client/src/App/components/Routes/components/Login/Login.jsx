// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginJSX extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" className="form-control" id="username" placeholder="Enter Username" value={this.props.user.username} onChange={this.props.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" className="form-control" id="password" placeholder="Enter Password" value={this.props.user.password} onChange={this.props.onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginJSX;
