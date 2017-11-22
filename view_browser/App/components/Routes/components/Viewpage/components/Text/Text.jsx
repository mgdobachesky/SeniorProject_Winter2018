// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var TextFormJSX = function() {
  return (
    <p>
      {this.props.text.textValue.split('\n').map(function(item, key) {
        return (
          <span key={key}>
            {item}
            <br/>
          </span>
        )
      })}
    </p>
  );
}

export default TextFormJSX;
