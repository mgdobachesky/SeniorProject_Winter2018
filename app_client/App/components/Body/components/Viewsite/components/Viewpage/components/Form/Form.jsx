// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import FormTextInputForm from './components/FormTextInputForm';

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

var createFormTextInput = function() {
  $( ".createFormTextInput" ).toggle("medium");
  $( ".updateFormTextInput" ).hide(false);
  this.handleClearFormTextInput();
}

var FormJSX = function() {
  return(
    <div key={this.props.form._id} className="card border-primary mb-3">
      <div className="card-header">
        <button type="button" className="btn btn-link" onClick={() => {createFormTextInput.call(this);}}>+ Add Text Input</button>
      </div>
      <div className="card-body createFormTextInput">
        <FormTextInputForm
          description="Create Text Input"
          formTextInput={this.state.formTextInput}
          formTextInputError={this.state.formTextInputError}
          onChange={this.handleChange}
          onSubmit={this.handleCreateFormTextInput} />
      </div>
      <div className="card-body updateFormTextInput">
        <FormTextInputForm
          description="Update Text Input"
          formTextInput={this.state.formTextInput}
          formTextInputError={this.state.formTextInputError}
          onChange={this.handleChange}
          onSubmit={this.handleUpdateFormTextInput} />
      </div>
      <div className="card-body">
        <h4 className="card-title">{this.props.form.formTitle}</h4>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        <FormTextInputList
          formTextInputs={this.state.formTextInputs}
          onEditFormTextInput={this.handleEditFormTextInput}
          onDeleteFormTextInput={this.handleDeleteFormTextInput} />
      </ul>
      <div className="card-footer">
        <a className="card-link" href="javascript:;" onClick={() => this.props.onEditForm({_id: this.props.form._id, viewsiteId: this.props.form.viewsiteId, viewpageId: this.props.form.viewpageId, formTitle: this.props.form.formTitle})}>Edit</a>
        <a className="card-link" href="javascript:;" onClick={() => this.props.onDeleteForm({_id: this.props.form._id})}>Delete</a>
      </div>
    </div>
  );
}

export default FormJSX;
