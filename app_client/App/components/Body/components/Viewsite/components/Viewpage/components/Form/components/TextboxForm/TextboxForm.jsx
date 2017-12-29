// Import required modules
import React from 'react';

var SuccessAlert = function(props) {
  if(props.formInputSuccess) {
    return (
      <div className="alert alert-success" role="alert">
        {props.formInputSuccess}
      </div>
    );
  } else {
    return null;
  }
}

var ErrorAlert = function(props) {
  if(props.formInputError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.formInputError}
      </div>
    );
  } else {
    return null;
  }
}

var TextboxFormJSX = function() {
  return (
    <div className="container-fluid">

      <SuccessAlert
      formInputSuccess={this.props.formInputSuccess} />

      <ErrorAlert
      formInputError={this.props.formInputError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="textboxLabel">
            Textbox Label

            <input
            type="text"
            name="textboxLabel"
            className="form-control"
            id="textboxLabel"
            placeholder="Enter Textbox Label"
            value={this.props.textbox.textboxLabel}
            onChange={this.handleChange} />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default TextboxFormJSX;
