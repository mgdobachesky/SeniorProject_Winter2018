// Import required modules
import React from 'react';

var SuccessAlert = function(props) {
  if(props.viewsiteSuccess) {
    return (
      <div className="alert alert-success" role="alert">
        {props.viewsiteSuccess}
      </div>
    );
  } else {
    return null;
  }
}

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
        {this.props.action === "update" ? this.props.viewsiteName : this.props.description}
      </h2>

      <SuccessAlert
      viewsiteSuccess={this.state.viewsiteSuccess} />

      <ErrorAlert
      viewsiteError={this.state.viewsiteError} />

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
          value={this.state.viewsite.viewsiteName}
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
            checked={this.state.viewsite.loginEnabled}
            onChange={this.handleChange} />

            Login Enabled
          </label>
        </div>

        <input
        name="_id"
        type="hidden"
        id="_id"
        value={this.state.viewsite._id} />

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default ViewsiteFormJSX;
