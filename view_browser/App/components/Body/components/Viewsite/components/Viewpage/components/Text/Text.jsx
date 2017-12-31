// Import required modules
import React from 'react';

/*
 * Text Element JSX view
 */
var TextJSX = function() {
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

// Export Text Element JSX view
export default TextJSX;
