// Import required modules
import React  from 'react';

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
          value={this.props.formTextInputValue}
          onChange={this.handleChange} />
      </label>
    </div>
  );
}

export default FormTextInputFormJSX;
