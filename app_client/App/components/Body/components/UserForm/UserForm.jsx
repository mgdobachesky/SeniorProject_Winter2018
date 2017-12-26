// Import required modules
import React from 'react';

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

var SuccessAlert = function(props) {
  if(props.userSuccess) {
    return (
      <div className="alert alert-success" role="alert">
        {props.userSuccess}
      </div>
    );
  } else {
    return null;
  }
}

var UserFormJSX = function() {
  return (
    <div
      className={
        this.props.description === "Sign Up" ? "container" : "container-fluid"
      }>
      
      <h2>
        {this.props.description}
      </h2>

      <SuccessAlert
      userSuccess={this.props.userSuccess} />

      <ErrorAlert
      userError={this.props.userError} />

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
          value={this.props.user.username}
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
          value={this.props.user.password}
          onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default UserFormJSX;
