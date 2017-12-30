// Import required modules
import React from 'react';

// Import requred components
import TextboxForm from './components/TextboxForm';

// Create list of Textboxs a Form owns
function FormInputList(props) {
  if(props.formInputs && props.formInputs.length >= 1) {
    const viewsiteId = props.viewsiteId;
    const viewpageId = props.viewpageId;
    const elementId = props.elementId;

    return props.formInputs.map((formInput, index) => {
      const _id = formInput._id;

      if(formInput.kind === "textbox") {
        return (
          <TextboxFormInput
          key={_id}
          viewsiteId={viewsiteId}
          viewpageId={viewpageId}
          elementId={elementId}
          formInput={formInput}
          onEditFormInput={props.onEditFormInput}
          onDeleteFormInput={props.onDeleteFormInput} />
        );
      }
    });
  } else {
    return null;
  }
}

function TextboxFormInput(props) {
  let editClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    elementId: props.elementId,
    _id: props.formInput._id,
    kind: props.formInput.kind,
    textboxLabel: props.formInput.textboxLabel
  };
  let deleteClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    elementId: props.elementId,
    _id: props.formInput._id,
    kind: props.formInput.kind
  };

  return (
    <li key={props.formInput._id} className="list-group-item d-flex">
      <div className="mr-auto p-2">
        <p>{props.formInput.textboxLabel}</p>
      </div>

      <div>
        <a
        className="p-2"
        href="javascript:;"
        onClick={() => props.onEditFormInput(editClick)}>
          Edit
        </a>
      </div>

      <div>
        <a
        className="p-2"
        href="javascript:;"
        onClick={() => props.onDeleteFormInput(deleteClick)}>
          Delete
        </a>
      </div>
    </li>
  );
}

var prepareCreateTextbox = function() {
  $( ".createTextbox" ).toggle("medium");
  $( ".updateTextbox" ).hide(false);
  this.handleClearLocalState();
}

var FormJSX = function() {
  return(
    <div key={this.props.element._id} className="card border-primary mb-3">
      <div className="card-header">
        <button
        type="button"
        className="btn btn-link"
        onClick={() => {prepareCreateTextbox.call(this);}}>
          + Add Textbox
        </button>
      </div>

      <div className="card-body createTextbox">
        <TextboxForm
        description="Create Text Input"
        action="create"
        textbox={this.state.textbox}
        formInputSuccess={this.state.formInputSuccess}
        formInputError={this.state.formInputError}
        onChange={this.handleChange}
        onSubmit={this.handleCreateFormInput} />
      </div>

      <div className="card-body updateTextbox">
        <TextboxForm
        description="Update Text Input"
        action="update"
        textbox={this.state.textbox}
        formInputSuccess={this.state.formInputSuccess}
        formInputError={this.state.formInputError}
        onChange={this.handleChange}
        onSubmit={this.handleUpdateFormInput} />
      </div>

      <div className="card-body">
        <h4 className="card-title">
          {this.props.element.formTitle}
        </h4>

        <p className="card-text"></p>
      </div>

      <ul className="list-group list-group-flush">
        <FormInputList
        viewsiteId={this.state.viewsiteId}
        viewpageId={this.state.viewpageId}
        elementId={this.state.element._id}
        formInputs={this.state.element.formInputs}
        onEditFormInput={this.handleEditFormInput}
        onDeleteFormInput={this.handleDeleteFormInput} />
      </ul>

      <div className="card-footer">
        <a
        className="card-link"
        href="javascript:;"
        onClick={() => this.props.onEditElement({
          viewsiteId: this.props.viewsiteId,
          viewpageId: this.props.viewpageId,
          _id: this.props.element._id,
          kind: "form",
          formTitle: this.props.element.formTitle
        })}>
          Edit
        </a>

        <a
        className="card-link"
        href="javascript:;"
        onClick={() => this.props.onDeleteElement({
          viewsiteId: this.props.viewsiteId,
          viewpageId: this.props.viewpageId,
          _id: this.props.element._id,
          kind: "form"
        })}>
          Delete
        </a>
      </div>
    </div>
  );
}

export default FormJSX;
