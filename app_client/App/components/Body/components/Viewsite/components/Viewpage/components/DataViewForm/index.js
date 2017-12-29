// Import required modules
import React from 'react';

// Import required components
import DataViewFormJSX from './DataViewForm.jsx';
import './dataViewForm.css';

class DataViewForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, "dataView");
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit("dataView");
  }

  render() {
    return(DataViewFormJSX.call(this));
  }
}

export default DataViewForm;
