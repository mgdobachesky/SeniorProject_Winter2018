// Import required modules
import React from 'react';

// Import required components
import TextboxJSX from './Textbox.js';

class Textbox extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(formInputValue) {
    this.props.onChange(formInputValue, this.props.formInput._id)
  }

  render() {
    return(TextboxJSX.call(this));
  }
}

export default Textbox;
