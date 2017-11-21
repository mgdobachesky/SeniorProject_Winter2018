// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var UserFormJSX = function() {
  return (
    <div className="container">
      <h2>{this.props.description}</h2>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input name="username" type="text" className="form-control" id="username" placeholder="Enter Username" value={this.props.user.username} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input name="password" type="password" className="form-control" id="password" placeholder="Enter Password" value={this.props.user.password} onChange={this.handleChange} />
        </div>
        <input name="_id" type="hidden" id="_id" value={this.props.user._id} />
        <button type="submit" className="btn btn-primary">{this.props.description}</button>
      </form>
    </div>
  );
}

export default UserFormJSX;
