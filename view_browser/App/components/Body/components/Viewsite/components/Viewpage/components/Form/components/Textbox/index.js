// Import required modules
import React from 'react';

// Import required components
import TextboxJSX from './Textbox.jsx';
import './textbox.css';

class Textbox extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "record")
  }

  render() {
    return(TextboxJSX.call(this));
  }
}

export default Textbox;
