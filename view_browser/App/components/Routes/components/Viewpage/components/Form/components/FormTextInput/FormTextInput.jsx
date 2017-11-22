// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var FormTextInputFormJSX = function() {
  return (
    <div className="form-group">
      <label htmlFor={this.props.formTextInput._id}>
        {this.props.formTextInput.formTextInputLabel}
        <input
          type="text"
          className="form-control"
          id={this.props.formTextInput._id}
          name={this.props.formTextInput._id}
          onChange={this.handleChange} />
      </label>
    </div>
  );
}

export default FormTextInputFormJSX;
