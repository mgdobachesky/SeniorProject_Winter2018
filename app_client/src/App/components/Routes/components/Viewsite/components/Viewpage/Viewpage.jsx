// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <h4 className="card-title">Text</h4>
            <p className="card-text">{textValue}</p>
          </div>
          <div className="card-footer">
            <a className="card-link" href="javascript:;" onClick={() => props.onEditText(editClick)}>Edit</a>
            <a className="card-link" href="javascript:;" onClick={() => props.onDeleteText(deleteClick)}>Delete</a>
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
              <h4 className="card-title">Data-View</h4>
              <p className="card-text">Source: {formTitle}</p>
            </div>
            <div className="card-footer">
              <a className="card-link" href="javascript:;" onClick={() => props.onEditDataView(editClick)}>Edit</a>
              <a className="card-link" href="javascript:;" onClick={() => props.onDeleteDataView(deleteClick)}>Delete</a>
            </div>
          </div>
        );
      }
    });
  } else {
    return null;
  }
}

class ViewpageJSX extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.viewpage.viewpageName}</h2>
        <button type="button" className="btn btn-link" onClick={() => $( ".createText" ).toggle("medium")}>+ Add Text</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createForm" ).toggle("medium")}>+ Add Form</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createDataView" ).toggle("medium")}>+ Add Data-View</button>

        <div id="createText" className="card createText mb-3">
          <div className="card-body">
            <TextForm
              description="Add Text"
              text={this.props.text}
              onChange={this.props.onChange}
              onSubmit={this.props.onCreateText} />
          </div>
        </div>
        <div id="updateText" className="card updateText mb-3">
          <div className="card-body">
            <TextForm
              description="Update Text"
              text={this.props.text}
              onChange={this.props.onChange}
              onSubmit={this.props.onUpdateText} />
          </div>
        </div>

        <div id="createForm" className="card createForm mb-3">
          <div className="card-body">
            <FormForm
              description="Add Form"
              form={this.props.form}
              onChange={this.props.onChange}
              onSubmit={this.props.onCreateForm} />
          </div>
        </div>
        <div id="updateForm" className="card updateForm mb-3">
          <div className="card-body">
            <FormForm
              description="Update Form"
              form={this.props.form}
              onChange={this.props.onChange}
              onSubmit={this.props.onUpdateForm} />
          </div>
        </div>

        <div id="createDataView" className="card createDataView mb-3">
          <div className="card-body">
            <DataViewForm
              description="Create Data-View"
              dataView={this.props.dataView}
              forms={this.props.globalForms}
              onChange={this.props.onChange}
              onSubmit={this.props.onCreateDataView} />
          </div>
        </div>
        <div id="updateDataView" className="card updateDataView mb-3">
          <div className="card-body">
            <DataViewForm
              description="Update Data-View"
              dataView={this.props.dataView}
              forms={this.props.globalForms}
              onChange={this.props.onChange}
              onSubmit={this.props.onUpdateDataView} />
          </div>
        </div>

        <TextList
          texts={this.props.texts}
          onEditText={this.props.onEditText}
          onDeleteText={this.props.onDeleteText} />

        <FormList
          forms={this.props.forms}
          onEditForm={this.props.onEditForm}
          onDeleteForm={this.props.onDeleteForm} />

        <DataViewList
          dataViews={this.props.dataViews}
          onEditDataView={this.props.onEditDataView}
          onDeleteDataView={this.props.onDeleteDataView} />

      </div>
    );
  }
}

export default ViewpageJSX;
