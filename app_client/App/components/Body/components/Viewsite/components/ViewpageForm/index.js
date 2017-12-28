// Import required modules
import React from 'react';

// Import required components
import ViewpageFormJSX from './ViewpageForm.jsx';
import './viewpageForm.css';

// Import required services
import ViewpageService from './services/ViewpageService';

class ViewpageForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageViewpageService = new ViewpageService();

    // Viewpage Methods
    this.handleCreateViewpage = this.handleCreateViewpage.bind(this);
    this.handleUpdateViewpage = this.handleUpdateViewpage.bind(this);
    this.handleDeleteViewpage = this.handleDeleteViewpage.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      viewpage: {
        _id: "",
        viewpageName: "",
        permissionLevel: 0
      },
      viewpageSuccess: "",
      viewpageError: ""
    };
  }

  handleCreateViewpage(event) {
    let requestData = {};
    let createViewpage = this.state.viewpage;
    let viewsiteId = this.props.viewsiteId;
    requestData.viewsiteId = viewsiteId;
    requestData.viewpageName = createViewpage.viewpageName;
    requestData.permissionLevel = createViewpage.permissionLevel;
    this.manageViewpageService.createViewpage(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing viewpage state
      this.handleClearLocalState();
      $("#createViewpage").hide("medium");
    },
    (error) => {
      this.setState({
        viewpageSuccess: "",
        viewpageError: error.response.data
      });
    });
  }

  handleUpdateViewpage(event) {
    // Update Viewpage
    let requestData = {};
    let updateViewpage = this.state.viewpage;
    let viewsiteId = this.props.viewsiteId;
    requestData.viewsiteId = viewsiteId;
    requestData.viewpageId = updateViewpage._id;
    requestData.viewpageName = updateViewpage.viewpageName;
    requestData.permissionLevel = updateViewpage.permissionLevel;
    this.manageViewpageService.updateViewpage(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      this.setState({
        viewpageSuccess: "Viewsite updated successfully!",
        viewpageError: ""
      });
    },
    (error) => {
      this.setState({
        viewpageError: error.response.data
      });
    });
  }

  handleDeleteViewpage() {
    let requestData = {};
    let viewsiteId = this.props.viewsiteId;
    let deleteViewpage = this.state.viewpage;
    requestData.viewsiteId = viewsiteId;
    requestData.viewpageId = deleteViewpage._id;
    this.manageViewpageService.deleteViewpage(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
    },
    (error) => {
      this.setState({
        viewpageSuccess: "",
        viewpageError: error.response.data
      });
    });
  }

  handleClearLocalState() {
    let clearViewpage = this.state.viewpage;
    clearViewpage._id = "";
    clearViewpage.viewpageName = "";
    clearViewpage.permissionLevel = 0;
    this.setState({
      viewpage: clearViewpage
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeViewpage = this.state.viewpage;
    changeViewpage[name] = value;
    this.setState({
      'viewpage': changeViewpage
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.action === "create") {
      this.handleCreateViewpage();
    } else if(this.props.action === "update") {
      this.handleUpdateViewpage();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.viewpage) {
      this.setState({
        viewpage: nextProps.viewpage,
        viewpageSuccess: "",
        viewpageError: ""
      });
    }
  }

  componentDidMount() {
    if(this.props.viewpage) {
      this.setState({
        viewpage: this.props.viewpage,
        viewpageSuccess: "",
        viewpageError: ""
      });
    }
  }

  render() {
    return(ViewpageFormJSX.call(this));
  }
}

export default ViewpageForm;
