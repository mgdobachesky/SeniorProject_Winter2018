// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewpageJSX from './Viewpage.jsx';
import './viewpage.css';

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
    this.handleClearText = this.handleClearText.bind(this);
    // Form Methods
    this.handleCreateForm = this.handleCreateForm.bind(this);
    this.handleReadAllForms = this.handleReadAllForms.bind(this);
    this.handleReadAllFormsByViewsite = this.handleReadAllFormsByViewsite.bind(this);
    this.handleEditForm = this.handleEditForm.bind(this);
    this.handleUpdateForm = this.handleUpdateForm.bind(this);
    this.handleDeleteForm = this.handleDeleteForm.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    // Data View Methods
    this.handleCreateDataView = this.handleCreateDataView.bind(this);
    this.handleReadAllDataViews = this.handleReadAllDataViews.bind(this);
    this.handleEditDataView = this.handleEditDataView.bind(this);
    this.handleUpdateDataView = this.handleUpdateDataView.bind(this);
    this.handleDeleteDataView = this.handleDeleteDataView.bind(this);
    this.handleClearDataView = this.handleClearDataView.bind(this);
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
      formsByViewsite: [],
      textError: "",
      formError: "",
      dataViewError: ""
    };
  }

  handleCreateText(event) {
    const requestData = this.state.text;
    this.manageTextService.createText(requestData).then((results) => {
      this.handleReadAllText();
      this.handleClearText();
      $(".createText").hide("medium");
    }, (error) => {
      this.setState({textError: error.response.data});
    });
  }

  handleReadAllText() {
    let currentViewpage = this.props.viewpage;
    let viewpageTexts = [];
    let requestData = this.state.text;
    requestData.viewpageId = currentViewpage._id;
    this.manageTextService.readAllText(requestData).then((results) => {
      this.setState({texts: results.data, textError: ""});
    }, (error) => {
      this.setState({textError: error.response.data});
    });

  }

  handleEditText(event) {
    let editText = this.state.text;
    editText._id = event._id;
    editText.textValue = event.textValue;
    this.setState({text: editText});
    $(".updateText").toggle("medium");
    $(".createText").hide(false);

    $( ".createForm" ).hide(false);
    $( ".updateForm" ).hide(false);

    $( ".createDataView" ).hide(false);
    $( ".updateDataView" ).hide(false);
  }

  handleUpdateText(event) {
    // Update Text
    let requestData = {};
    let updateText = this.state.text;
    requestData.textId = updateText._id;
    requestData.textValue = updateText.textValue;
    this.manageTextService.updateText(requestData).then((results) => {
      this.handleReadAllText();
      // Follow up by clearing text state
      this.handleClearText();
      $(".updateText").hide("medium");
    }, (error) => {
      this.setState({textError: error.response.data});
    });
  }

  handleDeleteText(event) {
    let requestData = {};
    requestData.textId = event._id;
    this.manageTextService.deleteText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      this.setState({textError: error.response.data});
    });
  }

  handleClearText() {
    let clearText = this.state.text;
    clearText._id = "";
    clearText.textValue = "";
    this.setState({text: clearText});
  }

  handleCreateForm(event) {
    const requestData = this.state.form;
    this.manageFormService.createForm(requestData).then((results) => {
      this.handleReadAllForms();
      this.handleReadAllFormsByViewsite();
      this.handleReadAllDataViews();
      // Follow up by clearing form state
      this.handleClearForm();
      $(".createForm").hide("medium");
    }, (error) => {
      this.setState({formError: error.response.data});
    });
  }

  handleReadAllForms() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewpageId = currentViewpage._id;
    this.manageFormService.readAllFormsByViewpage(requestData).then((results) => {
      this.setState({forms: results.data, formError: ""});
    }, (error) => {
      this.setState({formError: error.response.data});
    });
  }

  handleReadAllFormsByViewsite() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewsiteId = currentViewpage.viewsiteId;
    this.manageFormService.readAllFormsByViewsite(requestData).then((results) => {
      this.setState({formsByViewsite: results.data, formError: ""});
    }, (error) => {
      this.setState({formError: error.response.data});
    });
  }

  handleEditForm(event) {
    let editForm = this.state.form;
    editForm._id = event._id;
    editForm.formTitle = event.formTitle;
    this.setState({form: editForm});
    $(".updateForm").toggle("medium");
    $(".createForm").hide(false);

    $( ".createText" ).hide(false);
    $( ".updateText" ).hide(false);

    $( ".createDataView" ).hide(false);
    $( ".updateDataView" ).hide(false);
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
      this.handleReadAllDataViews();
      // Follow up by clearing form state
      this.handleClearForm();
      $(".updateForm").hide("medium");
    }, (error) => {
      this.setState({formError: error.response.data});
    });
  }

  handleDeleteForm(event) {
    let requestData = {};
    requestData.formId = event._id;
    this.manageFormService.deleteForm(requestData).then((results) => {
      this.handleReadAllForms();
      this.handleReadAllFormsByViewsite();
      this.handleReadAllDataViews();
    }, (error) => {
      this.setState({formError: error.response.data});
    });
  }

  handleClearForm() {
    let clearForm = this.state.form;
    clearForm._id = "";
    clearForm.formTitle = "";
    this.setState({form: clearForm});
  }

  handleCreateDataView(event) {
    const requestData = this.state.dataView;
    this.manageDataViewService.createDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
      // Follow up by clearing data view state
      this.handleClearDataView();
      $(".createDataView").hide("medium");
    }, (error) => {
      this.setState({dataViewError: error.response.data});
    });
  }

  handleReadAllDataViews() {
    let currentViewpage = this.props.viewpage;
    let requestData = {};
    requestData.viewpageId = currentViewpage._id;
    this.manageDataViewService.readAllDataViews(requestData).then((results) => {
      this.setState({dataViews: results.data, dataViewError: ""});
    }, (error) => {
      this.setState({dataViewError: error.response.data});
    });

  }

  handleEditDataView(event) {
    let editDataView = this.state.dataView;
    editDataView._id = event._id;
    editDataView.formId = event.formId;
    this.setState({dataView: editDataView});
    $(".updateDataView").toggle("medium");
    $(".createDataView").hide(false);

    $( ".createText" ).hide(false);
    $( ".updateText" ).hide(false);

    $( ".createForm" ).hide(false);
    $( ".updateForm" ).hide(false);
  }

  handleUpdateDataView(event) {
    // Update Form
    let requestData = {};
    let updateDataView = this.state.dataView;
    requestData.dataViewId = updateDataView._id;
    requestData.formId = updateDataView.formId;
    this.manageDataViewService.updateDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
      // Follow up by clearing form state
      this.handleClearDataView();
      $(".updateDataView").hide("medium");
    }, (error) => {
      this.setState({dataViewError: error.response.data});
    });
  }

  handleDeleteDataView(event) {
    let requestData = {};
    requestData.dataViewId = event._id;
    this.manageDataViewService.deleteDataView(requestData).then((results) => {
      this.handleReadAllDataViews();
    }, (error) => {
      this.setState({dataViewError: error.response.data});
    });
  }

  handleClearDataView() {
    let clearDataView = this.state.dataView;
    clearDataView._id = "";
    clearDataView.formId = "";
    this.setState({dataView: clearDataView});
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
    $(".createText").hide(false);
    $(".updateText").hide(false);
    $(".createForm").hide(false);
    $(".updateForm").hide(false);
    $(".createDataView").hide(false);
    $(".updateDataView").hide(false);
  }

  render() {
    return(ViewpageJSX.call(this));
  }
}

export default Viewpage;
