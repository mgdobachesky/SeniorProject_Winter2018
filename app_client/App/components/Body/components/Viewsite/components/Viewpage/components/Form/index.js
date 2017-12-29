// Import required modules
import React from 'react';

// Import required components
import FormJSX from './Form.jsx';
import './form.css';

// Import required services
import FormInputService from './services/FormInputService';

class Form extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Services
    this.manageFormInputService = new FormInputService();

    // Form Text Input Methods
    this.handleCreateFormInput = this.handleCreateFormInput.bind(this);
    this.handleEditFormInput = this.handleEditFormInput.bind(this);
    this.handleUpdateFormInput = this.handleUpdateFormInput.bind(this);
    this.handleDeleteFormInput = this.handleDeleteFormInput.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Set initial state
    this.state = {
      viewsiteId: "",
      viewpageId: "",
      element: {},
      textbox: {
        _id: "",
        kind: "textbox",
        textboxLabel: ""
      },
      formInputSuccess: "",
      formInputError: ""
    };
  }

  handleCreateFormInput(kind) {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpageId;
    requestData.elementId = this.state.element._id;
    requestData.kind = kind;
    if(kind === "textbox") {
      let createTextbox = this.state.textbox;
      requestData.textboxLabel = createTextbox.textboxLabel;
      $(".createTextbox").hide("medium");
    }
    this.manageFormInputService.createFormInput(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing form state
      this.handleClearLocalState();
    },
    (error) => {
      this.setState({
        formInputSuccess: "",
        formInputError: error.response.data
      });
    });
  }

  handleEditFormInput(event) {
    if(event.kind === "textbox") {
      let editTextbox = this.state.textbox;
      editTextbox._id = event._id;
      editTextbox.kind = event.kind;
      editTextbox.textboxLabel = event.textboxLabel;
      this.setState({
        textbox: editTextbox
      });
      $(".updateTextbox").toggle("medium");
      $(".createTextbox").hide(false);
    }
  }

  handleUpdateFormInput(kind) {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpageId;
    requestData.elementId = this.state.element._id;
    requestData.kind = kind;
    if(kind === "textbox") {
      let updateTextbox = this.state.textbox;
      requestData.formInputId = updateTextbox._id;
      requestData.textboxLabel = updateTextbox.textboxLabel;
      $(".updateTextbox").hide("medium");
    }
    this.manageFormInputService.updateFormInput(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing form state
      this.handleClearLocalState();
    },
    (error) => {
      this.setState({
        formInputSuccess: "",
        formInputError: error.response.data
      });
    });
  }

  handleDeleteFormInput(event) {
    let requestData = {};
    requestData.formInputId = event._id;
    requestData.kind = event.kind;
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpageId;
    requestData.elementId = this.state.element._id;

    this.manageFormInputService.deleteFormInput(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
    },
    (error) => {
      this.setState({
        formInputSuccess: "",
        formInputError: error.response.data
      });
    });
  }

  handleClearLocalState() {
    let clearTextbox = this.state.textbox;
    clearTextbox._id = "";
    clearTextbox.kind = "textbox";
    clearTextbox.textboxLabel = "";
    this.setState({
      textbox: clearTextbox,
      formInputSuccess: "",
      formInputError: ""
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
      element: nextProps.element
    });
  }

  componentDidMount() {
    this.setState({
      viewsiteId: this.props.viewsiteId,
      viewpageId: this.props.viewpageId,
      element: this.props.element
    });

    $( ".createTextbox" ).hide(false);
    $( ".updateTextbox" ).hide(false);
  }

  render() {
    return(FormJSX.call(this));
  }
}

export default Form;
