// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FormFormJSX = function() {
  return (
    <div className="container">
      <h4>{this.props.description}</h4>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="formTitle">Form Title
            <input type="text" name="formTitle" className="form-control" id="formTitle" value={this.props.form.formTitle} onChange={this.handleChange} />
          </label>
      </div>
        <input name="_id" type="hidden" id="_id" value={this.props.form._id} />
        <input name="viewsiteId" type="hidden" id="viewsiteId" value={this.props.form.viewsiteId} />
        <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.form.viewpageId} />
        <button type="submit" className="btn btn-primary">{this.props.description}</button>
      </form>
    </div>
  );
}

export default FormFormJSX;
