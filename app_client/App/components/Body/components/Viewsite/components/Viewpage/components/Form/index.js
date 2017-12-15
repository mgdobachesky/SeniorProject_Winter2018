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
    this.handleClearFormTextInput = this.handleClearFormTextInput.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      formTextInput: {
        _id: "",
        formId: "",
        formTextInputLabel: ""
      },
      formTextInputs: [],
      formTextInputError: ""
    };
  }

  handleCreateFormTextInput(event) {
    const requestData = this.state.formTextInput;
    this.manageFormTextInputService.createFormTextInput(requestData).then((results) => {
      this.handleReadAllFormTextInputs();
      // Follow up by clearing form state
      this.handleClearFormTextInput();
      $(".createFormTextInput").hide("medium");
    }, (error) => {
      this.setState({formTextInputError: error.response.data});
    });
  }

  handleReadAllFormTextInputs() {
    let currentForm = this.props.form;
    let requestData = {};
    requestData.formId = currentForm._id;
    this.manageFormTextInputService.readAllFormTextInputs(requestData).then((results) => {
      this.setState({formTextInputs: results.data, formTextInputError: ""});
    }, (error) => {
      this.setState({formTextInputError: error.response.data});
    });

  }

  handleEditFormTextInput(event) {
    let editFormTextInput = this.state.formTextInput;
    editFormTextInput._id = event._id;
    editFormTextInput.formTextInputLabel = event.formTextInputLabel;
    this.setState({formTextInput: editFormTextInput});
    $(".updateFormTextInput").toggle("medium");
    $(".createFormTextInput").hide(false);
  }

  handleUpdateFormTextInput(event) {
    // Update Form
    let requestData = {};
    let updateFormTextInput = this.state.formTextInput;
    requestData.formTextInputId = updateFormTextInput._id;
    requestData.formTextInputLabel = updateFormTextInput.formTextInputLabel;
    this.manageFormTextInputService.updateFormTextInput(requestData).then((results) => {
      // Follow up by clearing form state
      this.handleClearFormTextInput();
      $(".updateFormTextInput").hide("medium");
      this.handleReadAllFormTextInputs();
    }, (error) => {
      this.setState({formTextInputError: error.response.data});
    });
  }

  handleDeleteFormTextInput(event) {
    let requestData = {};
    requestData.formTextInputId = event._id;
    this.manageFormTextInputService.deleteFormTextInput(requestData).then((results) => {
      this.handleReadAllFormTextInputs();
    }, (error) => {
      this.setState({formTextInputError: error.response.data});
    });
  }

  handleClearFormTextInput() {
    let clearFormTextInput = this.state.formTextInput;
    clearFormTextInput._id = "";
    clearFormTextInput.formTextInputLabel = "";
    this.setState({formTextInput: clearFormTextInput});
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
    $( ".createFormTextInput" ).hide(false);
    $( ".updateFormTextInput" ).hide(false);
  }

  render() {
    return(FormJSX.call(this));
  }
}

export default Form;
