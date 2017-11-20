// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import TextForm from './TextForm';
import FormForm from './FormForm';
import Form from './Form';
import DataViewForm from './DataViewForm';

// Import required services
import TextService from '../services/TextService';
import FormService from '../services/FormService';
import DataViewService from '../services/DataViewService';

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
    });
  } else {
    return null;
  }
}

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    // Services
    this.manageTextService = new TextService();
    this.manageFormService = new FormService();
    this.manageDataViewService = new DataViewService();
    // Text Methods
    this.handleCreateText = this.handleCreateText.bind(this);
    this.handleReadAllText = this.handleReadAllText.bind(this);
    this.handleEditText = this.handleEditText.bind(this);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleDeleteText = this.handleDeleteText.bind(this);
    // Form Methods
    this.handleCreateForm = this.handleCreateForm.bind(this);
    this.handleReadAllForms = this.handleReadAllForms.bind(this);
    this.handleReadAllFormsByViewsite = this.handleReadAllFormsByViewsite.bind(this);
    this.handleEditForm = this.handleEditForm.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    // Data View Methods
    this.handleCreateDataView = this.handleCreateDataView.bind(this);
    this.handleReadAllDataViews = this.handleReadAllDataViews.bind(this);
    this.handleEditDataView = this.handleEditDataView.bind(this);
    this.handleUpdateDataView = this.handleUpdateDataView.bind(this);
    this.handleDeleteDataView = this.handleDeleteDataView.bind(this);
    // Other Methods
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      text: {
        _id: "",
        viewpageId: "",
        textValue: ""
      },
      texts: [],
      form: {
        _id: "",
        viewsiteId: "",
        viewpageId: "",
        formTitle: ""
      },
      forms: [],
      dataView: {
        _id: "",
        formId: "",
        viewpageId: ""
      },
      dataViews: [],
      formsByViewsite: []
    };
  }

  handleCreateText(event) {
    const requestData = this.state.text;
    this.manageTextService.createText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      console.log(error.response.data);
    });
    let clearText = this.state.text;
    clearText.textValue = "";
    this.setState({text: clearText});
    $(".createText").hide("medium");
  }

  handleReadAllText() {
    let currentViewpage = this.props.viewpage;
    let viewpageTexts = [];
    let requestData = this.state.text;
    requestData.viewpageId = currentViewpage._id;

    this.manageTextService.readAllText(requestData).then((results) => {
      this.setState({texts: results.data});
    }, (error) => {
      console.log(error.response.data);
    });

  }

  handleEditText(event) {
    let editText = this.state.text;
    editText._id = event._id;
    editText.textValue = event.textValue;
    this.setState({text: editText});
    $(".updateText").show("medium");
  }

  handleUpdateText(event) {
    // Update Text
    let requestData = {};
    let updateText = this.state.text;
    requestData.textId = updateText._id;
    requestData.textValue = updateText.textValue;
    this.manageTextService.updateText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing text state
    let clearText = this.state.text;
    clearText._id = "";
    clearText.textValue = "";
    this.setState({text: clearText});
    $(".updateText").hide("medium");
  }

  handleDeleteText(event) {
    let requestData = {};
    requestData.textId = event._id;
    this.manageTextService.deleteText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleCreateForm(event) {
    const requestData = this.state.form;
    this.manageFormService.createForm(requestData).then((results) => {
      this.handleReadAllForms();
      this.handleReadAllFormsByViewsite();
    }, (error) => {
      console.log(error.response.data);
    });
    let clearForm = this.state.form;
    clearForm.formTitle = "";
    this.setState({form: clearForm});
    $(".createForm").hide("medium");
  }

  handleReadAllForms() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewpageId = currentViewpage._id;

    this.manageFormService.readAllFormsByViewpage(requestData).then((results) => {
      this.setState({forms: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadAllFormsByViewsite() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewsiteId = currentViewpage.viewsiteId;

    this.manageFormService.readAllFormsByViewsite(requestData).then((results) => {
      this.setState({formsByViewsite: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleEditForm(event) {
    let editForm = this.state.form;
    editForm._id = event._id;
    editForm.formTitle = event.formTitle;
    this.setState({form: editForm});
    $(".updateForm").show("medium");
  }

  handleUpdateForm(event) {
    // Update Form
    let requestData = {};
    let updateForm = this.state.form;
    requestData.formId = updateForm._id;
    requestData.formTitle = updateForm.formTitle;
    this.manageFormService.updateForm(requestData).then((results) => {
      this.handleReadAllForms();
      this.handleReadAllFormsByViewsite();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing form state
    let clearForm = this.state.form;
    clearForm._id = "";
    clearForm.formTitle = "";
    this.setState({form: clearForm});
    $(".updateForm").hide("medium");
  }

  handleDeleteForm(event) {
    let requestData = {};
    requestData.formId = event._id;
    this.manageFormService.deleteForm(requestData).then((results) => {
      this.handleReadAllForms();
      this.handleReadAllFormsByViewsite();
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleCreateDataView(event) {
    const requestData = this.state.dataView;
    this.manageDataViewService.createDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
    }, (error) => {
      console.log(error.response.data);
    });
    let clearDataView = this.state.dataView;
    clearDataView.formId = "";
    this.setState({dataView: clearDataView});
    $(".createDataView").hide("medium");
  }

  handleReadAllDataViews() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewpageId = currentViewpage._id;

    this.manageDataViewService.readAllDataViews(requestData).then((results) => {
      this.setState({dataViews: results.data});
    }, (error) => {
      console.log(error.response.data);
    });

  }

  handleEditDataView(event) {
    let editDataView = this.state.dataView;
    editDataView._id = event._id;
    editDataView.formId = event.formId;
    this.setState({dataView: editDataView});
    $(".updateDataView").show("medium");
  }

  handleUpdateDataView(event) {
    // Update Form
    let requestData = {};
    let updateDataView = this.state.dataView;
    requestData.dataViewId = updateDataView._id;
    requestData.formId = updateDataView.formId;
    this.manageDataViewService.updateDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing form state
    let clearDataView = this.state.dataView;
    clearDataView._id = "";
    clearDataView.formId = "";
    this.setState({dataView: clearDataView});
    $(".updateDataView").hide("medium");
  }

  handleDeleteDataView(event) {
    let requestData = {};
    requestData.dataViewId = event._id;
    this.manageDataViewService.deleteDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
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

  componentDidMount(nextProps, nextState) {
    let currentViewpage = this.props.viewpage;
    let currentText = this.state.text;
    let currentForm = this.state.form;
    let currentDataView = this.state.dataView;
    currentText.viewpageId = currentViewpage._id;
    currentForm.viewsiteId = currentViewpage.viewsiteId;
    currentForm.viewpageId = currentViewpage._id;
    currentDataView.viewpageId = currentViewpage._id;
    this.setState({text: currentText, form: currentForm, dataView: currentDataView});

    // Prepare to render viewpage
    this.handleReadAllText();
    this.handleReadAllForms();
    this.handleReadAllFormsByViewsite();
    this.handleReadAllDataViews();
    $(".createText").hide();
    $(".updateText").hide();
    $(".createForm").hide();
    $(".updateForm").hide();
    $(".createDataView").hide();
    $(".updateDataView").hide();
  }

  render() {
    const viewpage = this.props.viewpage;
    const text = this.state.text;
    const texts = this.state.texts;
    const form = this.state.form;
    const forms = this.state.forms;
    const dataView = this.state.dataView;
    const dataViews = this.state.dataViews;
    const globalForms = this.state.formsByViewsite;

    return (
      <div className="container">
        <h2>{viewpage.viewpageName}</h2>
        <button type="button" className="btn btn-link" onClick={() => $( ".createText" ).toggle("medium")}>+ Add Text</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createForm" ).toggle("medium")}>+ Add Form</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createDataView" ).toggle("medium")}>+ Add Data-View</button>

        <div id="createText" className="card createText mb-3">
          <div className="card-body">
            <TextForm
              description="Add Text"
              text={text}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleCreateText} />
          </div>
        </div>
        <div id="updateText" className="card updateText mb-3">
          <div className="card-body">
            <TextForm
              description="Update Text"
              text={text}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleUpdateText} />
          </div>
        </div>

        <div id="createForm" className="card createForm mb-3">
          <div className="card-body">
            <FormForm
              description="Add Form"
              form={form}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleCreateForm} />
          </div>
        </div>
        <div id="updateForm" className="card updateForm mb-3">
          <div className="card-body">
            <FormForm
              description="Update Form"
              form={form}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleUpdateForm} />
          </div>
        </div>

        <div id="createDataView" className="card createDataView mb-3">
          <div className="card-body">
            <DataViewForm
              description="Create Data-View"
              dataView={dataView}
              forms={globalForms}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleCreateDataView} />
          </div>
        </div>
        <div id="updateDataView" className="card updateDataView mb-3">
          <div className="card-body">
            <DataViewForm
              description="Update Data-View"
              dataView={dataView}
              forms={globalForms}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleUpdateDataView} />
          </div>
        </div>

        <TextList
          texts={texts}
          onEditText={this.handleEditText}
          onDeleteText={this.handleDeleteText} />
        <FormList
          forms={forms}
          onEditForm={this.handleEditForm}
          onDeleteForm={this.handleDeleteForm} />
        <DataViewList
          dataViews={dataViews}
          onEditDataView={this.handleEditDataView}
          onDeleteDataView={this.handleDeleteDataView} />
      </div>
    );
  }
}

export default Viewpage;
