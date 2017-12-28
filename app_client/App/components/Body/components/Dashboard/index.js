// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import DashboardJSX from './Dashboard.jsx';
import './dashboard.css';

// Import required services
import ViewsiteService from '../../../../services/ViewsiteService';

class Dashboard extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Service Class Definitions\
    this.manageViewsiteService = new ViewsiteService();

    // Viewsite Methods
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  handleEditViewsite(event) {
    let editViewsite = this.state.viewsite;
    editViewsite._id = event._id;
    editViewsite.viewsiteName = event.viewsiteName;
    editViewsite.loginEnabled = event.loginEnabled;
    this.setState({
      viewsite: editViewsite
    });
    $("#updateViewsite").toggle("medium");
    $("#createViewsite").hide(false);
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
      // Follow up by clearing viewsite state
      this.handleClearLocalState();
-      $("#updateViewsite").hide("medium");
    },
    (error) => {
      this.setState({
        viewsiteSuccess: "",
        viewsiteError: error.response.data
      });
    });
  }

  handleDeleteViewsite(event) {
    let requestData = {};
    requestData.viewsiteId = event._id;
    this.manageViewsiteService.deleteViewsite(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsites");
    },
    (error) => {
      this.setState({
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
      viewsite: clearViewsite,
      viewsiteSuccess: "",
      viewsiteError: ""
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

  componentDidMount() {
    $("#createViewsite").hide(false);
    $("#updateViewsite").hide(false);
  }

  render() {
    if(this.props.loggedIn) {
      return(DashboardJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Dashboard;
