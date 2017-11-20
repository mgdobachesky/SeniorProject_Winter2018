// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Create list of Form Options for the Data View
function DataViewOptions(props) {
  if(props.forms) {
    return props.forms.map((form, index) => {
      const _id = form._id;
      const formTitle = form.formTitle;
      return (
        <option key={_id} value={_id}>{formTitle}</option>
      );
    });
  } else {
    return null;
  }
}

class DataViewFormJSX extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>{this.props.description}</h4>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="formId">
              Data-View:
              <select id="formId" name="formId" className="form-control" value={this.props.dataView.formId} onChange={this.props.onChange}>
                <option value="" selected disabled hidden>Choose Data-View...</option>
                <DataViewOptions forms={this.props.forms} />
              </select>
            </label>
          </div>
          <input name="_id" type="hidden" id="_id" value={this.props.dataView._id} />
          <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.dataView.viewpageId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default DataViewFormJSX;
