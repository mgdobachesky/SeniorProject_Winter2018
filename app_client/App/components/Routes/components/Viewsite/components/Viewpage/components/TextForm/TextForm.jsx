// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var ErrorAlert = function(props) {
  if(props.textError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.textError}
      </div>
    );
  } else {
    return null;
  }
}

var TextFormJSX = function() {
  return (
    <div className="container">
      <h4>{this.props.description}</h4>
      <ErrorAlert textError={this.props.textError} />
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <textarea name="textValue" className="form-control" id="textValue" placeholder="Write some text..." value={this.props.text.textValue} onChange={this.handleChange} />
        </div>
        <input name="_id" type="hidden" id="_id" value={this.props.text._id} />
        <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.text.viewpageId} />
        <button type="submit" className="btn btn-primary">{this.props.description}</button>
      </form>
    </div>
  );
}

export default TextFormJSX;
