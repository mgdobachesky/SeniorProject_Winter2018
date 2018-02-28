// Import required modules
import React from 'react';

// Import required components
import TextareaJSX from './Textarea.js';

class Textarea extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
  }

  /*
   * Update state to reflect what a user types
   */
  handleChange(formInputValue) {
    this.props.onChange(formInputValue, this.props.formInput._id)
  }

  /*
   * Render Textarea JSX view
   */
  render() {
    return(TextareaJSX.call(this));
  }
}

// Export Textarea
export default Textarea;
