// Import required modules
import React from 'react';

var ErrorAlert = function(props) {
  if(props.formTextInputError) {
    return (
      <div className="alert alert-danger" role="alert">
        {props.formTextInputError}
      </div>
    );
  } else {
    return null;
  }
}

var FormTextInputFormJSX = function() {
  return (
    <div className="container-fluid">
      <ErrorAlert
      formTextInputError={this.props.formTextInputError} />

      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="formTextInputLabel">
            Text Input Label

            <input
            type="text"
            name="formTextInputLabel"
            className="form-control"
            id="formTextInputLabel"
            placeholder="Enter Text Input Label"
            value={this.props.formTextInput.formTextInputLabel}
            onChange={this.handleChange} />
          </label>
        </div>

        <input
        name="_id"
        type="hidden"
        id="_id"
        value={this.props.formTextInput._id} />

        <input
        name="viewsiteId"
        type="hidden"
        id="viewsiteId"
        value={this.props.formTextInput.formId} />

        <button type="submit" className="btn btn-primary">
          {this.props.description}
        </button>
      </form>
    </div>
  );
}

export default FormTextInputFormJSX;
