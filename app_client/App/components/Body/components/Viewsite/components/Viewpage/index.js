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
    this.handleHideAllForms = this.handleHideAllForms.bind(this);
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

  /*
   * Method that allows Users to create new Elements
   */
  handleCreateElement(kind) {
    // Prepare HTTP API request data
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;
    requestData.kind = kind;
    // Continue HTTP API request data preparation based on Element kind
    // and hide create form when done
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
    // Send out API request to create a new Element
    this.manageElementService.createElement(requestData)
    .then((results) => {
      // Afterwards, set Global Viewsite state to reflect changes
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing element state
      this.handleClearLocalState();
    },
    (error) => {
      // Handle errors
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  /*
   * Method that prepares an Element to be updated
   */
  handleEditElement(event) {
    if(event.kind === "text") {
      // Set Text Element state to Element to be updated
      let editText = this.state.text;
      editText._id = event._id;
      editText.kind = event.kind;
      editText.textValue = event.textValue;
      this.setState({
        text: editText
      });
      // Show only the update Text form
      let isVisible = $(".updateText").is(':visible');
      this.handleHideAllForms(".updateText", isVisible);
    }
    else if(event.kind === "form") {
      // Set Form Element state to Element to be updated
      let editForm = this.state.form;
      editForm._id = event._id;
      editForm.kind = event.kind;
      editForm.formTitle = event.formTitle;
      this.setState({
        form: editForm
      });
      // Show only the update Form form
      let isVisible = $(".updateForm").is(':visible');
      this.handleHideAllForms(".updateForm", isVisible);
    }
    else if(event.kind === "dataView") {
      // Set Data View Element state to Element to be updated
      let editDataView = this.state.dataView;
      editDataView._id = event._id;
      editDataView.kind = event.kind;
      editDataView.formId = event.formId;
      this.setState({
        dataView: editDataView
      });
      // Show only the update Data View form
      let isVisible = $(".updateDataView").is(':visible');
      this.handleHideAllForms(".updateDataView", isVisible);
    }
  }

  /*
   * Method that allows Users to update existing Elements
   */
  handleUpdateElement(kind) {
    // Prepare HTTP API request data
    let requestData = {};
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;
    requestData.kind = kind;
    // Continue preparing HTTP API request data based on Element kind
    // and hide update form when done
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
    // Send out API request to update selected Element
    this.manageElementService.updateElement(requestData)
    .then((results) => {
      // Afterwards, set Global Viewsite state to reflect changes
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing element state
      this.handleClearLocalState();
    },
    (error) => {
      // Handle errors
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  /*
   * Method that allows Users to delete existing Elements
   */
  handleDeleteElement(event) {
    // Prepare HTTP API request data
    let requestData = {};
    requestData.elementId = event._id;
    requestData.kind = event.kind;
    requestData.viewsiteId = this.state.viewsiteId;
    requestData.viewpageId = this.state.viewpage._id;
    // Send request to delete selected Element
    this.manageElementService.deleteElement(requestData)
    .then((results) => {
      // Afterwards, update Global Viewsite state to reflect changes
      this.handleSetGlobalState(results.data, "viewsite");
    },
    (error) => {
      // Handle errors
      this.setState({
        elementSuccess: "",
        elementError: error.response.data
      });
    });
  }

  /*
   * Method used to hide all forms before showing another
   */
  handleHideAllForms(selector, isVisible) {
    // Sharply hide all create forms
    $(".createText").hide(false);
    $(".createForm").hide(false);
    $(".createDataView").hide(false);

    // Only hide update forms sharply if they are not the selector
    if(".updateText" != selector) {
      $(".updateText").hide(false);
    } else if(".updateForm" != selector) {
      $(".updateForm").hide(false);
    } else if(".updateDataView" != selector) {
      $( ".updateDataView" ).hide(false);
    }

    // Smooth animation on the targeted selector
    if(isVisible) {
      $(selector).hide("medium");
    } else {
      $(selector).show("medium");
    }
  }

  /*
   * Method that clears local Element state
   * Used to provide a clean state for new create forms
   */
  handleClearLocalState() {
    // Set local state to default values
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

  /*
   * Method that updates the Global state to reflect Viewsite modifications
   * Passed down from the Viewsite component
   */
  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  /*
   * Method that changes state based on what a user types
   */
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

  /*
   * React component lifecycle method that controls what happens before
   * a component receives props
   * Used to set Viewpage state based on props passed from the Viewsite component
   */
  componentWillReceiveProps(nextProps) {
    // Set later state when component receives props
    this.setState({
      viewpage: nextProps.viewpage,
      userTables: nextProps.userTables
    });
  }

  /*
   * React component lifecycle method that controls what happens after
   * a component mounts
   * Used to set Viewpage state based on props passed from the Viewsite
   * component, as well as to hide all create / update forms
   */
  componentDidMount() {
    // Set initial state on mount
    this.setState({
      viewsiteId: this.props.viewsiteId,
      viewpage: this.props.viewpage,
      userTables: this.props.userTables
    });
    // Hide all forms when component first mounts
    this.handleHideAllForms();
  }

  /*
   * Method used to render the Viewpage JSX view
   */
  render() {
    return(ViewpageJSX.call(this));
  }
}

export default Viewpage;
