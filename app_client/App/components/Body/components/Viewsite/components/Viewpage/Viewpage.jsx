// Import required modules
import React from 'react';

// Import requred components
import TextForm from './components/TextForm';
import FormForm from './components/FormForm';
import Form from './components/Form';
import DataViewForm from './components/DataViewForm';

// Create list of Text a Viewpage owns
function TextList(props) {
  if(props.texts) {
    return props.texts.map((text, index) => {
      const _id = text._id;
      const viewpageId = text.viewpageId;
      const textValue = text.textValue;
      let editClick = {_id: _id, viewpageId: viewpageId, textValue: textValue};
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">
              Text
            </h4>
            <p className="card-text">
              {textValue.split('\n').map(function(item, key) {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </p>
          </div>

          <div className="card-footer">
            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onEditText(editClick)}>
              Edit
            </a>

            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onDeleteText(deleteClick)}>
              Delete
            </a>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

// Create list of forms a Viewpage owns
function FormList(props) {
  if(props.forms) {
    return props.forms.map((form, index) => {
      return (
        <Form
        key={form._id}
        form={form}
        onEditForm={props.onEditForm}
        onDeleteForm={props.onDeleteForm} />
      );
    });
  } else {
    return null;
  }
}

// Create list of Data-Views a Viewpage owns
function DataViewList(props) {
  if(props.dataViews) {
    return props.dataViews.map((dataView, index) => {
      if(dataView.form) {
        const _id = dataView._id;
        const formId = dataView.form._id;
        const formTitle = dataView.form.formTitle;
        let editClick = {_id: _id, formId: formId};
        let deleteClick = {_id: _id};
        return (
          <div key={_id} className="card border-primary mb-3">
            <div className="card-body">
              <h4 className="card-title">
                Data-View
              </h4>

              <p className="card-text">
                Source: {formTitle}
              </p>
            </div>

            <div className="card-footer">
              <a
              className="card-link"
              href="javascript:;"
              onClick={() => props.onEditDataView(editClick)}>
                Edit
              </a>

              <a
              className="card-link"
              href="javascript:;"
              onClick={() => props.onDeleteDataView(deleteClick)}>
                Delete
              </a>
            </div>
          </div>
        );
      }
    });
  } else {
    return null;
  }
}

var createText = function() {
  $( ".createText" ).toggle("medium");
  $( ".updateText" ).hide(false);

  $( ".createForm" ).hide(false);
  $( ".updateForm" ).hide(false);

  $( ".createDataView" ).hide(false);
  $( ".updateDataView" ).hide(false);

  this.handleClearText();
};

var createForm = function() {
  $( ".createForm" ).toggle("medium");
  $( ".updateForm" ).hide(false);

  $( ".createText" ).hide(false);
  $( ".updateText" ).hide(false);

  $( ".createDataView" ).hide(false);
  $( ".updateDataView" ).hide(false);

  this.handleClearForm();
};

var createDataView = function() {
  $( ".createDataView" ).toggle("medium");
  $( ".updateDataView" ).hide(false);

  $( ".createText" ).hide(false);
  $( ".updateText" ).hide(false);

  $( ".createForm" ).hide(false);
  $( ".updateForm" ).hide(false);

  this.handleClearDataView();
};

var ViewpageJSX = function() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-auto">
          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {createText.call(this);}}>
              + Add Text
            </button>
          </div>

          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {createForm.call(this);}}>
              + Add Form
            </button>
          </div>

          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {createDataView.call(this);}}>
              + Add Data-View
            </button>
          </div>
        </div>

        <div className="col">
          <div id="createText" className="card createText mb-3">
            <div className="card-body">
              <TextForm
              description="Add Text"
              text={this.state.text}
              textError={this.state.textError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateText} />
            </div>
          </div>

          <div id="updateText" className="card updateText mb-3">
            <div className="card-body">
              <TextForm
              description="Update Text"
              text={this.state.text}
              textError={this.state.textError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateText} />
            </div>
          </div>

          <div id="createForm" className="card createForm mb-3">
            <div className="card-body">
              <FormForm
              description="Add Form"
              form={this.state.form}
              formError={this.state.formError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateForm} />
            </div>
          </div>

          <div id="updateForm" className="card updateForm mb-3">
            <div className="card-body">
              <FormForm
              description="Update Form"
              form={this.state.form}
              formError={this.state.formError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateForm} />
            </div>
          </div>

          <div id="createDataView" className="card createDataView mb-3">
            <div className="card-body">
              <DataViewForm
              description="Create Data-View"
              dataView={this.state.dataView}
              forms={this.state.formsByViewsite}
              dataViewError={this.state.dataViewError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateDataView} />
            </div>
          </div>

          <div id="updateDataView" className="card updateDataView mb-3">
            <div className="card-body">
              <DataViewForm
              description="Update Data-View"
              dataView={this.state.dataView}
              forms={this.state.formsByViewsite}
              dataViewError={this.state.dataViewError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateDataView} />
            </div>
          </div>

          <TextList
          texts={this.state.texts}
          onEditText={this.handleEditText}
          onDeleteText={this.handleDeleteText} />

          <FormList
          forms={this.state.forms}
          onEditForm={this.handleEditForm}
          onDeleteForm={this.handleDeleteForm} />

          <DataViewList
          dataViews={this.state.dataViews}
          onEditDataView={this.handleEditDataView}
          onDeleteDataView={this.handleDeleteDataView} />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default ViewpageJSX;
