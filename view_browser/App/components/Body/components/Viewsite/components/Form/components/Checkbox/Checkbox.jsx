// Import required modules
import React from 'react';

/*
 * Textbox Form Input JSX view
 */
var CheckboxJSX = function () {
    return (
        <div className="form-group">
            <div className="form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id={this.props.formInput._id}
                    name={this.props.formInput._id}
                    value={this.props.formInputValue}
                    onChange={this.handleChange} />

                <label className="form-check-label" htmlFor={this.props.formInput._id}>
                    <h5>{this.props.formInput.checkboxLabel}</h5>
                </label>
            </div>
        </div>
    );
};

// Export Textbox Form Input JSX view
export default CheckboxJSX;
