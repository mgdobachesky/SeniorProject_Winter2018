// Import required modules
import React from 'react';

/*
 * Alert that notifies users of any successful operation
 * Used by ViewsiteFormJSX
 */
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

/*
 * Alert that notifies users of any unsuccessful operation
 * Used by ViewsiteFormJSX
 */
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

/*
 * Viewsite Form view
 */
var ViewsiteFormJSX = function() {
  return (
    <div className="container-fluid">
      <h2>
        {this.props.description}
      </h2>

      <SuccessAlert
      viewsiteSuccess={this.props.viewsiteSuccess} />

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

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

// Export the Viewsite Form JSX
export default ViewsiteFormJSX;
