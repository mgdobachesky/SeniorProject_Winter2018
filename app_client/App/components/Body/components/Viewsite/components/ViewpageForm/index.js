// Import required modules
import React from 'react';

// Import required components
import ViewpageFormJSX from './ViewpageForm.jsx';
import './viewpageForm.css';


class ViewpageForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "viewpage");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return(ViewpageFormJSX.call(this));
  }
}

export default ViewpageForm;
