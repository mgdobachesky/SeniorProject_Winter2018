// Import required modules
import React from 'react';

// Import required components
import ViewsiteFormJSX from './ViewsiteForm.jsx';
import './viewsiteForm.css';

// Import required services
import ViewsiteService from '../../../../../../services/ViewsiteService';

class ViewsiteForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Service Class Definitions\
    this.manageViewsiteService = new ViewsiteService();

    // Viewsite Methods
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      viewsite: {
        _id: "",
        viewsiteName: "",
        loginEnabled: false
      },
      viewsiteSuccess: "",
      viewsiteError: ""
    }
  }

  handleCreateViewsite() {
    let requestData = {};
    let createViewsite = this.state.viewsite;
    requestData.viewsiteName = createViewsite.viewsiteName;
    requestData.loginEnabled = createViewsite.loginEnabled;
    this.manageViewsiteService.createViewsite(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsites");
      // Follow up by clearing viewsite state
      this.handleClearLocalState();
      $("#createViewsite").hide("medium");
    },
    (error) => {
      this.setState({
        viewsiteSuccess: "",
        viewsiteError: error.response.data
      });
    });
  }

  handleUpdateViewsite() {
    let requestData = {};
    let updateViewsite = this.state.viewsite;
    requestData.viewsiteId = updateViewsite._id;
    requestData.viewsiteName = updateViewsite.viewsiteName;
    requestData.loginEnabled = updateViewsite.loginEnabled;
    this.manageViewsiteService.updateViewsite(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsites");
      this.setState({
        viewsiteSuccess: "Viewsite updated successfully!",
        viewsiteError: ""
      });
    },
    (error) => {
      this.setState({
        viewsiteSuccess: "",
        viewsiteError: error.response.data
      });
    });
  }

  handleDeleteViewsite() {
    let requestData = {};
    let deleteViewsite = this.state.viewsite;
    requestData.viewsiteId = deleteViewsite._id;
    this.manageViewsiteService.deleteViewsite(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsites");
    },
    (error) => {
      this.setState({
        viewsiteSuccess: "",
        viewsiteError: error.response.data
      });
    });
  }

  handleClearLocalState() {
    let clearViewsite = this.state.viewsite;
    clearViewsite._id = "";
    clearViewsite.viewsiteName = "";
    clearViewsite.loginEnabled = false;
    this.setState({
      viewsite: clearViewsite
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeViewsite = this.state.viewsite;
    changeViewsite[name] = value;
    this.setState({
      'viewsite': changeViewsite
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.action === "create") {
      this.handleCreateViewsite();
    } else if(this.props.action === "update") {
      this.handleUpdateViewsite();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.viewsite) {
      this.setState({
        viewsite: nextProps.viewsite,
        viewsiteSuccess: "",
        viewsiteError: ""
      });
    }
  }

  componentDidMount() {
    if(this.props.viewsite) {
      this.setState({
        viewsite: this.props.viewsite,
        viewsiteSuccess: "",
        viewsiteError: ""
      });
    }
  }

  render() {
    return(ViewsiteFormJSX.call(this));
  }
}

export default ViewsiteForm;
