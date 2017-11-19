// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import FormTextInputForm from './FormTextInputForm';

// Import required services
import FormTextInputService from '../services/FormTextInputService';

// Create list of FormTextInputs a Form owns
function FormTextInputList(props) {
  if(props.formTextInputs) {
    return props.formTextInputs.map((formTextInput, index) => {
      const _id = formTextInput._id;
      const formId = formTextInput.formId;
      const formTextInputLabel = formTextInput.formTextInputLabel;
      let editClick = {_id: _id, formId: formId, formTextInputLabel: formTextInputLabel};
      let deleteClick = {_id: _id};
      return (
        <li key={_id} className="list-group-item d-flex">
          <div className="mr-auto p-2"><p>{formTextInputLabel}</p></div>
          <div><a className="p-2" href="javascript:;" onClick={() => props.onEditFormTextInput(editClick)}>Edit</a></div>
          <div><a className="p-2" href="javascript:;" onClick={() => props.onDeleteFormTextInput(deleteClick)}>Delete</a></div>
        </li>
      );
    });
  } else {
    return null;
  }
}

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
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event, toChange) {
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
    const formTextInput = this.state.formTextInput;
    const formTextInputs = this.state.formTextInputs;
    const form = this.props.form;
    const _id = form._id;
    const viewsiteId = form.viewsiteId;
    const viewpageId = form.viewpageId;
    const formTitle = form.formTitle;
    let editClick = {_id: _id, viewsiteId: viewsiteId, viewpageId: viewpageId, formTitle: formTitle};
    let deleteClick = {_id: _id};
    return(
      <div key={_id} className="card border-primary mb-3">
        <div className="card-header">
          <button type="button" className="btn btn-link" onClick={() => $( ".createFormTextInput" ).toggle("medium")}>+ Add Form Input Text</button>
        </div>
        <div className="card-body createFormTextInput">
          <FormTextInputForm
            description="Create Form Text Input"
            formTextInput={formTextInput}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleCreateFormTextInput} />
        </div>
        <div className="card-body updateFormTextInput">
          <FormTextInputForm
            description="Update Form Text Input"
            formTextInput={formTextInput}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleUpdateFormTextInput} />
        </div>
        <div className="card-body">
          <h4 className="card-title">{formTitle}</h4>
          <p className="card-text"></p>
        </div>
        <ul className="list-group list-group-flush">
          <FormTextInputList
            formTextInputs={formTextInputs}
            onEditFormTextInput={this.handleEditFormTextInput}
            onDeleteFormTextInput={this.handleDeleteFormTextInput} />
        </ul>
        <div className="card-footer">
          <a className="card-link" href="javascript:;" onClick={() => this.props.onEditForm(editClick)}>Edit</a>
          <a className="card-link" href="javascript:;" onClick={() => this.props.onDeleteForm(deleteClick)}>Delete</a>
        </div>
      </div>
    );
  }
}

export default Form;
