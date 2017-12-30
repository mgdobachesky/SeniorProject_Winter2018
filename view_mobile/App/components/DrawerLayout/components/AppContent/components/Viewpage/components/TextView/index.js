// Import required modules
import React from 'react';

// Import required components
import TextViewJSX from './TextView.js';

class TextView extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);
  }

  render() {
    return(TextViewJSX.call(this));
  }
}

export default TextView;
