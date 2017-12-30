// Import required modules
import React  from 'react';

var TextboxJSX = function() {
  return (
    <div className="form-group">
      <label htmlFor={this.props.formInput._id}>
        {this.props.formInput.textboxLabel}

        <input
        type="text"
        className="form-control"
        id={this.props.formInput._id}
        name={this.props.formInput._id}
        value={this.props.formInputValue}
        onChange={this.handleChange} />
      </label>
    </div>
  );
}

export default TextboxJSX;
