// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required components
import FormJSX from './Form.jsx';
import './form.css';

// Import required services
import FormTextInputService from './services/FormTextInputService';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // Services
    this.manageFormTextInputService = new FormTextInputService();
    // Form Text Input Methods
    this.handleCreateFormTextInput = this.handleCreateFormTextInput.bind(this);
    this.handleReadAllFormTextInputs = this.handleReadAllFormTextInputs.bind(this);
    this.handleEditFormTextInput = this.handleEditFormTextInput.bind(this);
    this.handleUpdateFormTextInput = this.handleUpdateFormTextInput.bind(this);
    this.handleDeleteFormTextInput = this.handleDeleteFormTextInput.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      formTextInput: {
        _id: "",
        formId: "",
        formTextInputLabel: ""
      },
      formTextInputs: []
    };
  }

  handleCreateFormTextInput(event) {
    const requestData = this.state.formTextInput;
    this.manageFormTextInputService.createFormTextInput(requestData).then((results) => {
      this.handleReadAllFormTextInputs();
    }, (error) => {
      console.log(error.response.data);
    });
    let clearFormTextInput = this.state.formTextInput;
    clearFormTextInput.formTextInputLabel = "";
    this.setState({formTextInput: clearFormTextInput});
    $(".createFormTextInput").hide("medium");
  }

  handleReadAllFormTextInputs() {
    let currentForm = this.props.form;
    let requestData = {};
    requestData.formId = currentForm._id;

    this.manageFormTextInputService.readAllFormTextInputs(requestData).then((results) => {
      this.setState({formTextInputs: results.data});
    }, (error) => {
      console.log(error.response.data);
    });

  }

  handleEditFormTextInput(event) {
    let editFormTextInput = this.state.formTextInput;
    editFormTextInput._id = event._id;
    editFormTextInput.formTextInputLabel = event.formTextInputLabel;
    this.setState({formTextInput: editFormTextInput});
    $(".updateFormTextInput").show("medium");
  }

  handleUpdateFormTextInput(event) {
    // Update Form
    let requestData = {};
    let updateFormTextInput = this.state.formTextInput;
    requestData.formTextInputId = updateFormTextInput._id;
    requestData.formTextInputLabel = updateFormTextInput.formTextInputLabel;
    this.manageFormTextInputService.updateFormTextInput(requestData).then((results) => {
      this.handleReadAllFormTextInputs();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing form state
    let clearFormTextInput = this.state.formTextInput;
    clearFormTextInput._id = "";
    clearFormTextInput.formTextInputLabel = "";
    this.setState({formTextInput: clearFormTextInput});
    $(".updateFormTextInput").hide("medium");
  }

  handleDeleteFormTextInput(event) {
    let requestData = {};
    requestData.formTextInputId = event._id;
    this.manageFormTextInputService.deleteFormTextInput(requestData).then((results) => {
      this.handleReadAllFormTextInputs();
    }, (error) => {
      console.log(error.response.data);
    });
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

  componentDidMount() {
    let currentForm = this.props.form;
    let currentFormTextInput = this.state.formTextInput;
    currentFormTextInput.formId = currentForm._id;
    this.setState({formTextInput: currentFormTextInput});

    // Prepare to render viewpage
    this.handleReadAllFormTextInputs();
    $( ".createFormTextInput" ).hide("medium");
    $( ".updateFormTextInput" ).hide("medium");
  }

  render() {
    return(FormJSX.call(this));
  }
}

export default Form;
