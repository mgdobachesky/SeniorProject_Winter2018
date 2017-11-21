// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextFormJSX extends React.Component {
  render() {
    return (
      <div className="container">
        <h4>{this.props.description}</h4>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <textarea name="textValue" className="form-control" id="textValue" placeholder="Write some text..." value={this.props.text.textValue} onChange={this.props.onChange} />
          </div>
          <input name="_id" type="hidden" id="_id" value={this.props.text._id} />
          <input name="viewpageId" type="hidden" id="viewpageId" value={this.props.text.viewpageId} />
          <button type="submit" className="btn btn-primary">{this.props.description}</button>
        </form>
      </div>
    );
  }
}

export default TextFormJSX;
