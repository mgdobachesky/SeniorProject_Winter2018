// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event, "text");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.description}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="viewpageName">Text
            <textarea name="textValue" className="form-control" id="textValue" placeholder="Write some text..." value={this.props.text.textValue} onChange={this.handleChange} />
          </label>
        </div>
          <input name="_id" type="hidden" id="_id" value={this.props.text._id} />
          <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.text.viewpageId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default TextForm;
