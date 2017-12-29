// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import ViewsiteJSX from './Viewsite.jsx';
import './viewsite.css';

// Import required services
import ViewsiteService from '../../../../services/ViewsiteService';
import UserDatabaseService from './services/UserDatabaseService';
import ViewpageService from './services/ViewpageService';

class Viewsite extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageViewsiteService = new ViewsiteService();
    this.manageUserDatabaseService = new UserDatabaseService();
    this.manageViewpageService = new ViewpageService();

    // Viewpage Methods
    this.handleCreateViewpage = this.handleCreateViewpage.bind(this);
    this.handleEditViewpage = this.handleEditViewpage.bind(this);
    this.handleUpdateViewpage = this.handleUpdateViewpage.bind(this);
    this.handleDeleteViewpage = this.handleDeleteViewpage.bind(this);

    // Other Methods
    this.handleGatherUserTables = this.handleGatherUserTables.bind(this);
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleClearLocalState = this.handleClearLocalState.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Set initial state
    this.state = {
      viewsite: {},
      viewpage: {
        _id: "",
        viewpageName: "",
        permissionLevel: 0
      },
      viewpageSuccess: "",
      viewpageError: "",
      userTables: []
    };
  }

  handleCreateViewpage(event) {
    let requestData = {};
    let createViewpage = this.state.viewpage;
    requestData.viewsiteId = this.state.viewsite._id;
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

  handleEditViewpage(event) {
    let editViewpage = this.state.viewpage;
    editViewpage._id = event._id;
    editViewpage.viewpageName = event.viewpageName;
    editViewpage.permissionLevel = event.permissionLevel;
    this.setState({
      viewpage: editViewpage
    });
    $("#updateViewpage").toggle("medium");
    $("#createViewpage").hide(false);
  }

  handleUpdateViewpage() {
    let requestData = {};
    let updateViewpage = this.state.viewpage;
    requestData.viewsiteId = this.state.viewsite._id;
    requestData.viewpageId = updateViewpage._id;
    requestData.viewpageName = updateViewpage.viewpageName;
    requestData.permissionLevel = updateViewpage.permissionLevel;
    this.manageViewpageService.updateViewpage(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "viewsite");
      // Follow up by clearing viewsite state
      this.handleClearLocalState();
      $("#updateViewpage").hide("medium");
    },
    (error) => {
      this.setState({
        viewpageSuccess: "",
        viewpageError: error.response.data
      });
    });
  }

  handleDeleteViewpage(event) {
    let requestData = {};
    requestData.viewpageId = event._id;
    requestData.viewsiteId = event.viewsiteId;
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

  handleGatherUserTables() {
    let userTables = [];
    for(const viewpage of this.state.viewsite.viewpages) {
      for(const element of viewpage.elements) {
        if(element.kind === "form") {
          userTables.push(element);
        }
      }
    }
    this.handleSetGlobalState(userTables, "userTables");
  }

  handleClearLocalState() {
    let clearViewpage = this.state.viewpage;
    clearViewpage._id = "";
    clearViewpage.viewpageName = "";
    clearViewpage.permissionLevel = 0;
    this.setState({
      viewpage: clearViewpage,
      viewpageSuccess: "",
      viewpageError: ""
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.setState({
      [toSet]: newStateData
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

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    requestData.viewsiteName = nextProps.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsite: results.data
      }, () => this.handleGatherUserTables());
    },
    (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount() {
    // Load initial Viewsite
    let requestData = {};
    requestData.viewsiteName = this.props.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsite: results.data
      }, () => this.handleGatherUserTables());
    },
    (error) => {
      console.log(error.response.data);
    });
    $("#createViewpage").hide(false);
    $("#updateViewpage").hide(false);
  }

  render() {
    if(this.props.loggedIn) {
      return(ViewsiteJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Viewsite;
