// Import required modules
import React from 'react';

var TextFormJSX = function() {
  return (
    <p>
      {this.props.element.textValue.split('\n').map(function(item, key) {
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
