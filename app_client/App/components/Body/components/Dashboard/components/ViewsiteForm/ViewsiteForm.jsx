// Import required modules
import React from 'react';

var ErrorAlert = function(props) {
  if(props.viewsiteError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.viewsiteError}
      </div>
    );
  } else {
    return null;
  }
}

var ViewsiteFormJSX = function() {
  return (
    <div className="container-fluid">
      <h2>
        {this.props.description}
      </h2>

      <ErrorAlert
      viewsiteError={this.props.viewsiteError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="viewsiteName">
            Viewsite Name
          </label>
          <input
          type="text"
          name="viewsiteName"
          className="form-control"
          id="viewsiteName"
          placeholder="Enter Viewsite Name"
          value={this.props.viewsite.viewsiteName}
          onChange={this.handleChange} />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
            type="checkbox"
            name="loginEnabled"
            className="form-check-input"
            id="loginEnabled"
            value="loginEnabled"
            checked={this.props.viewsite.loginEnabled}
            onChange={this.handleChange} />

            Login Enabled
          </label>
        </div>

        <input
        name="_id"
        type="hidden"
        id="_id"
        value={this.props.viewsite._id} />

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default ViewsiteFormJSX;
