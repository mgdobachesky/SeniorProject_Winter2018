// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormTextInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event, "formTextInput");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="formTextInputLabel">Text Input Label
              <input type="text" name="formTextInputLabel" className="form-control" id="formTextInputLabel" value={this.props.formTextInput.formTextInputLabel} onChange={this.handleChange} />
            </label>
          </div>
          <input name="_id" type="hidden" id="_id" value={this.props.formTextInput._id} />
          <input name="viewsiteId" type="hidden" id="viewsiteId" value={this.props.formTextInput.formId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default FormTextInputForm;
