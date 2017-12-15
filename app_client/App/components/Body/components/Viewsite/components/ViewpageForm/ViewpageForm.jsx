// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var ErrorAlert = function(props) {
  if(props.viewpageError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.viewpageError}
      </div>
    );
  } else {
    return null;
  }
}

var ViewpageFormJSX = function() {
  return (
    <div className="container-fluid">
      <h2>{this.props.description}</h2>
      <ErrorAlert viewpageError={this.props.viewpageError} />
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

export default ViewpageFormJSX;
