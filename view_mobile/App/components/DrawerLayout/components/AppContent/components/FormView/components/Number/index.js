// Import required modules
import React from 'react';

// Import required components
import NumberJSX from './Number.js';

class Number extends React.Component {
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
   * Render Number JSX view
   */
  render() {
    return(NumberJSX.call(this));
  }
}

// Export Number
export default Number;
