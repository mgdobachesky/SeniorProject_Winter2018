// Import required modules
import React from 'react';

// Import required components
import FormViewJSX from './FormView.js';

// Import required services
import UserRecordService from './services/UserRecordService';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.manageUserRecordService = new UserRecordService();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      formTextInputs: [],
      record: {}
    }
  }

  handleChange(text, formTextInputId) {
    let record = this.state.record;
    record[formTextInputId] = text;
    this.setState({
      record: record
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let requestData = {};
    requestData.formId = this.props.form._id;
    requestData.record = this.state.record;
    this.manageUserDatabaseService.createUserRecord(requestData)
    .then((results) => {
      for(let key in requestData.record) {
        requestData.record[key] = "";
      }
      this.setState({
        record: requestData.record
      });
      console.log(results.data);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount(nextProps) {
    let requestData = {};
    requestData.formId = this.props.form._id;
    this.manageFormTextInputService.readAllFormTextInputs(requestData)
    .then((results) => {
      this.setState({
        formTextInputs: results.data
      });
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    return(FormViewJSX.call(this));
  }
}

export default FormView;