// Import required modules
import React from 'react';

/*
 * Image Element JSX view
 */
var ImageJSX = function() {
  return (
    <div>
      <img className="img-fluid rounded" src={this.props.element.imageLocation
          + "?"
          + new Date().getTime()} />

      <br />
    </div>
  );
}

// Export Image Element JSX view
export default ImageJSX;
