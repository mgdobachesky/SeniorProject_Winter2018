// Import required modules
import React from 'react';

var ErrorAlert = function(props) {
  if(props.loginError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.loginError}
      </div>
    );
  } else {
    return null;
  }
}

var LoginJSX = function() {
  return (
    <div className="container">
      <h2>
        Login
      </h2>

      <ErrorAlert
      loginError={this.props.loginError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            Username
          </label>

          <input
          name="username"
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter Username"
          value={this.state.loginCredentials.username}
          onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
          </label>

          <input
          name="password"
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter Password"
          value={this.state.loginCredentials.password}
          onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginJSX;
