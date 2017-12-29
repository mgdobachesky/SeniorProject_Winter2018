// Import required modules
import React from 'react';

// Import requred components
import ViewpageJSX from './Viewpage.jsx';
import './viewpage.css';

// Import required servicesc
import ElementService from './services/ElementService';

class Viewpage extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageElementService = new ElementService();

    // Element Methods
    this.handleCreateElement = this.handleCreateElement.bind(this);
    this.handleEditElement = this.handleEditElement.bind(this);
    this.handleUpdateElement = this.handleUpdateElement.bind(this);
    this.handleDeleteElement = this.handleDeleteElement.bind(this);

    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Set initial state
    this.state = {
      viewsiteId: "",
      viewpage: {},
      text: {
        _id: "",
        kind: "text",
        textValue: ""
      },
      form: {
        _id: "",
        kind: "form",
        formTitle: ""
      },
      dataView: {
        _id: "",
        kind: "dataView",
        formId: ""
      },
      elementSuccess: "",
      elementError: "",
      userTables: []
    };
  }

  handleCreateElement(kind) {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;
    requestData.kind = kind;
    if(kind === "text") {
      let createText = this.state.text;
      requestData.textValue = createText.textValue;
      $(".createText").hide("medium");
    }
    else if(kind === "form") {
      let createForm = this.state.form;
      requestData.formTitle = createForm.formTitle;
      $(".createForm").hide("medium");
    }
    else if(kind === "dataView") {
      let createDataView = this.state.dataView;
      requestData.formId = createDataView.formId;
      $(".createDataView").hide("medium");
    }
    this.manageElementService.createElement(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing element state
      this.handleClearLocalState();
    },
    (error) => {
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  handleEditElement(event) {
    if(event.kind === "text") {
      let editText = this.state.text;
      editText._id = event._id;
      editText.kind = event.kind;
      editText.textValue = event.textValue;
      this.setState({
        text: editText
      });
      $(".updateText").toggle("medium");
      $(".createText").hide(false);
    }
    else if(event.kind === "form") {
      let editForm = this.state.form;
      editForm._id = event._id;
      editForm.kind = event.kind;
      editForm.formTitle = event.formTitle;
      this.setState({
        form: editForm
      });
      $(".updateForm").toggle("medium");
      $( ".createForm" ).hide(false);
    }
    else if(event.kind === "dataView") {
      let editDataView = this.state.dataView;
      editDataView._id = event._id;
      editDataView.kind = event.kind;
      editDataView.formId = event.formId;
      this.setState({
        dataView: editDataView
      });
      $(".updateDataView").toggle("medium");
      $( ".createDataView" ).hide(false);
    }
  }

  handleUpdateElement(kind) {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;
    requestData.kind = kind;
    if(kind === "text") {
      let updateText = this.state.text;
      requestData.elementId = updateText._id;
      requestData.textValue = updateText.textValue;
      $(".updateText").hide("medium");
    }
    else if(kind === "form") {
      let updateForm = this.state.form;
      requestData.elementId = updateForm._id;
      requestData.formTitle = updateForm.formTitle;
      $(".updateForm").hide("medium");
    }
    else if(kind === "dataView") {
      let updateDataView = this.state.dataView;
      requestData.elementId = updateDataView._id;
      requestData.formId = updateDataView.formId;
      $(".updateDataView").hide("medium");
    }
    this.manageElementService.updateElement(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing element state
      this.handleClearLocalState();
    },
    (error) => {
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  handleDeleteElement(event) {
    let requestData = {};
    requestData.elementId = event._id;
    requestData.kind = event.kind;
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;

    this.manageElementService.deleteElement(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
    },
    (error) => {
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  handleClearLocalState() {
    let clearText = this.state.text;
    let clearForm = this.state.form;
    let clearDataView = this.state.dataView;
    clearText._id = "";
    clearText.kind = "text";
    clearText.textValue = "";
    clearForm._id = "";
    clearForm.kind = "form";
    clearForm.formTitle = "";
    clearDataView._id = "";
    clearDataView.kind = "dataView";
    clearDataView.formId = "";
    this.setState({
      text: clearText,
      form: clearForm,
      dataView: clearDataView,
      elementSuccess: "",
      elementError: ""
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      viewpage: nextProps.viewpage,
      userTables: nextProps.userTables
    });
  }

  componentDidMount() {
    this.setState({
      viewsiteId: this.props.viewsiteId,
      viewpage: this.props.viewpage,
      userTables: this.props.userTables
    });

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
