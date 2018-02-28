// Import required modules
import React from 'react';

// Import required components
import CheckboxJSX from './Checkbox.js';

class Checkbox extends React.Component {
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
   * Render Checkbox JSX view
   */
  render() {
    return(CheckboxJSX.call(this));
  }
}

// Export Checkbox
export default Checkbox;
