// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewsiteFormJSX extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.description}</h2>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="viewsiteName">Viewsite Name</label>
            <input type="text" name="viewsiteName" className="form-control" id="viewsiteName" placeholder="Enter Viewsite Name" value={this.props.viewsite.viewsiteName} onChange={this.props.onChange} />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" name="loginEnabled" className="form-check-input" id="loginEnabled" value="loginEnabled" checked={this.props.viewsite.loginEnabled} onChange={this.props.onChange} />
              Login Enabled
            </label>
          </div>
          <input name="_id" type="hidden" id="_id" value={this.props.viewsite._id} />
          <input name="userId" type="hidden" id="userId" value={this.props.viewsite.userId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default ViewsiteFormJSX;
