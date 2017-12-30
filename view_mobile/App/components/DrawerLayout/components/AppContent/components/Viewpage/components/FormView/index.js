// Import required modules
import React from 'react';

// Import required components
import FormViewJSX from './FormView.js';

// Import required services
import UserRecordService from './services/UserRecordService';

class FormView extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageUserRecordService = new UserRecordService();

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      formInputs: [],
      record: {}
    }
  }

  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  handleChange(formInputValue, formInputId) {
    let record = this.state.record;
    record[formInputId] = formInputValue;
    this.setState({
      record: record
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let requestData = {};
    requestData.viewsiteId = this.props.viewsiteId;
    requestData.elementId = this.props.element._id;
    requestData.record = this.state.record;
    this.manageUserRecordService.createUserRecord(requestData)
    .then((results) => {
      for(let key in requestData.record) {
        requestData.record[key] = "";
      }
      this.setState({
        record: requestData.record
      });
      this.handleRequestUserDatabase(this.props.viewsiteId);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount() {
    if(this.props.element.formInputs && this.props.element.formInputs.length >= 1) {
      this.setState({
        formInputs: this.props.element.formInputs
      });
    }
  }

  render() {
    return(FormViewJSX.call(this));
  }
}

export default FormView;
