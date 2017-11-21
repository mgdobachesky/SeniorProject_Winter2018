// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewpageJSX from './Viewpage.jsx';

// Import required services
import TextService from './services/TextService';
import FormService from './services/FormService';
import DataViewService from './services/DataViewService';

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
    this.handleChange = this.handleChange.bind(this);
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
      this.handleReadAllDataViews();
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
    return (
      <ViewpageJSX
        viewpage={this.props.viewpage}
        text={this.state.text}
        texts={this.state.texts}
        form={this.state.form}
        forms={this.state.forms}
        globalForms={this.state.formsByViewsite}
        dataView={this.state.dataView}
        dataViews={this.state.dataViews}
        onCreateText={this.handleCreateText}
        onEditText={this.handleEditText}
        onUpdateText={this.handleUpdateText}
        onDeleteText={this.handleDeleteText}
        onCreateForm={this.handleCreateForm}
        onEditForm={this.handleEditForm}
        onUpdateForm={this.handleUpdateForm}
        onDeleteForm={this.handleDeleteForm}
        onCreateDataView={this.handleCreateDataView}
        onEditDataView={this.handleEditDataView}
        onUpdateDataView={this.handleUpdateDataView}
        onDeleteDataView={this.handleDeleteDataView}
        onChange={this.handleChange} />
    );
  }
}

export default Viewpage;
