// Import required modules
import React from 'react';

var SuccessAlert = function(props) {
  if(props.elementSuccess) {
    return (
      <div className="alert alert-success" role="alert">
        {props.elementSuccess}
      </div>
    );
  } else {
    return null;
  }
}

var ErrorAlert = function(props) {
  if(props.elementError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.elementError}
      </div>
    );
  } else {
    return null;
  }
}

// Create list of Form Options for the Data View
function DataViewOptions(props) {
  if(props.userTables && props.userTables.length >= 1) {
    return props.userTables.map((userTable, index) => {
      const _id = userTable._id;
      const formTitle = userTable.formTitle;
      return (
        <option key={_id} value={_id}>
          {formTitle}
        </option>
      );
    });
  } else {
    return null;
  }
}

var DataViewFormJSX = function() {
  return (
    <div className="container-fluid">
      <h4>
        {this.props.description}
      </h4>

      <SuccessAlert
      elementSuccess={this.props.elementSuccess} />

      <ErrorAlert
      elementError={this.props.elementError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="formId">
            Data-View:

            <select
            id="formId"
            name="formId"
            className="form-control"
            value={this.props.dataView.formId}
            onChange={this.handleChange}>
              <option value="" disabled hidden>
                Choose Data-View...
              </option>

              <DataViewOptions userTables={this.props.userTables} />
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

export default DataViewFormJSX;
