// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var ErrorAlert = function(props) {
  if(props.userError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.userError}
      </div>
    );
  } else {
    return null;
  }
}

var LoginJSX = function() {
  return (
    <div className="container">
      <h2>Login</h2>
      <ErrorAlert userError={this.props.userError} />
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" className="form-control" id="username" placeholder="Enter Username" value={this.props.user.username} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" className="form-control" id="password" placeholder="Enter Password" value={this.props.user.password} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default LoginJSX;
