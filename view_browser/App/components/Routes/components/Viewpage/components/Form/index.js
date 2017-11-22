// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import FormJSX from './Form.jsx';
import './form.css';

// Import required services
import FormTextInputService from './services/FormTextInputService';
import UserDatabaseService from './services/UserDatabaseService';

class Form extends React.Component {
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

  handleChange(event, toChange) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeProp = this.state[toChange];
    changeProp[name] = value;
    this.setState({
      [toChange]: changeProp
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let requestData = {};
    requestData.formId = this.props.form._id;
    requestData.record = this.state.record;
    this.manageUserDatabaseService.createUserRecord(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    requestData.formId = nextProps.form._id;
    this.manageFormTextInputService.readAllFormTextInputs(requestData).then((results) => {
      this.setState({formTextInputs: results.data});
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
    return(FormJSX.call(this));
  }
}

export default Form;
