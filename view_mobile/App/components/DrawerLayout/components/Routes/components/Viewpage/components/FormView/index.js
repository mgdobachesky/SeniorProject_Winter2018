// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-native';

// Import required components
import FormViewJSX from './FormView.js';

// Import required services
import FormTextInputService from './services/FormTextInputService';
import UserDatabaseService from './services/UserDatabaseService';

class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.manageFormTextInputService = new FormTextInputService();
    this.manageUserDatabaseService = new UserDatabaseService();
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
    this.manageUserDatabaseService.createUserRecord(requestData).then((results) => {
      console.log(results.data);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount(nextProps) {
    let requestData = {};
    requestData.formId = this.props.form._id;
    this.manageFormTextInputService.readAllFormTextInputs(requestData).then((results) => {
      this.setState({formTextInputs: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    return(FormViewJSX.call(this));
  }
}

export default FormView;