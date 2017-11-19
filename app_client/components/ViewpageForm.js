// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewpageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event, "viewpage");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="container">
        <h2>{this.props.description}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="viewpageName">Viewpage Name</label>
            <input type="text" name="viewpageName" className="form-control" id="viewpageName" placeholder="Enter Viewpage Name" value={this.props.viewpage.viewpageName} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="permissionLevel">
              Permission Level:
              <select id="permissionLevel" name="permissionLevel" className="form-control" value={this.props.viewpage.permissionLevel} onChange={this.handleChange}>
                <option value="0">Owner</option>
                <option value="1">Administrators</option>
                <option value="2">Private</option>
                <option value="3">Public</option>
              </select>
            </label>
          </div>
          <input name="_id" type="hidden" id="_id" value={this.props.viewpage._id} />
          <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.viewpage.viewpageId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default ViewpageForm;
