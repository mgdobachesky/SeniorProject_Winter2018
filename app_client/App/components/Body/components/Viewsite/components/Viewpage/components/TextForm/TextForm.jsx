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

var TextFormJSX = function() {
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
          <textarea
          name="textValue"
          className="form-control"
          id="textValue"
          placeholder="Write some text..."
          value={this.props.text.textValue}
          onChange={this.handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default TextFormJSX;
