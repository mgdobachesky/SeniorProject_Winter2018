// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewsiteCreate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCreateViewsite(event.target);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="viewsiteName">Viewsite Name</label>
            <input type="text" className="form-control" id="viewsiteName" placeholder="Enter Viewsite Name" />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" id="loginEnabled" value="loginEnabled" />
              Login Enabled
            </label>
          </div>
          <button type="submit" className="btn btn-primary">{this.props.title}</button>
        </form>
      </div>
    );
  }
}

export default ViewsiteCreate;
