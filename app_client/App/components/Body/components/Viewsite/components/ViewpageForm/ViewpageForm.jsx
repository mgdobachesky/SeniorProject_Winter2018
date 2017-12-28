// Import required modules
import React from 'react';

var SuccessAlert = function(props) {
  if(props.viewpageSuccess) {
    return (
      <div className="alert alert-success" role="alert">
        {props.viewpageSuccess}
      </div>
    );
  } else {
    return null;
  }
}

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
      <h2>
        {this.props.action === "update" ? this.props.viewpageName : this.props.description}
      </h2>

      <SuccessAlert
      viewpageSuccess={this.state.viewpageSuccess} />

      <ErrorAlert
      viewpageError={this.state.viewpageError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="viewpageName">
            Viewpage Name
          </label>

          <input
          type="text"
          name="viewpageName"
          className="form-control"
          id="viewpageName"
          placeholder="Enter Viewpage Name"
          value={this.state.viewpage.viewpageName}
          onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="permissionLevel">
            Permission Level:

            <select
            id="permissionLevel"
            name="permissionLevel"
            className="form-control"
            value={this.state.viewpage.permissionLevel}
            onChange={this.handleChange}>
              <option value="0">Owner</option>
              <option value="1">Administrators</option>
              <option value="2">Private</option>
              <option value="3">Public</option>
            </select>
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default ViewpageFormJSX;
