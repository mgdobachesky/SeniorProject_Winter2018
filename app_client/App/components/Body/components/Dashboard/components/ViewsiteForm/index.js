// Import required modules
import React from 'react';

// Import required components
import ViewsiteFormJSX from './ViewsiteForm.jsx';
import './viewsiteForm.css';

class ViewsiteForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "viewsite");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return(ViewsiteFormJSX.call(this));
  }
}

export default ViewsiteForm;
