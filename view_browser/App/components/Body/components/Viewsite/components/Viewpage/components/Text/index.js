// Import required modules
import React from 'react';

// Import required components
import TextJSX from './Text.jsx';
import './text.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(TextJSX.call(this));
  }
}

export default Text;
