// Import required modules
import React from 'react';

// Import required components
import AppJSX from './App.jsx';
import './app.css';

// Import required services
import UserService from './services/UserService';
import ViewsiteService from './services/ViewsiteService';

// Create main App
class App extends React.Component {
  constructor(props) {
    // Call superclass with same arguments
    super(props);
    // Service Class Definitions
    this.manageUserService = new UserService();
    this.manageViewsiteService = new ViewsiteService();
    // User Methods
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleReadOneUser = this.handleReadOneUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    // Viewsite Methods
    this.handleReadAllViewsites = this.handleReadAllViewsites.bind(this);
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    this.handleClearViewsiteState = this.handleClearViewsiteState.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);

    // Set initial state
    this.state = {
      user: {},
      userSuccess: "",
      userError: "",
      loggedIn: false,
      viewsite: {},
      viewsites: [],
      viewsiteError: ""
    };
  }

  handleCreateUser() {
    let requestData = {};
    let newUser = this.state.user;
    requestData.username = newUser.username;
    requestData.password = newUser.password;
    this.manageUserService.createUser(requestData)
    .then((results) => {
      this.setState({
        user: results.data,
        loggedIn: true,
        userSuccess: "",
        userError: ""
      });
    },
    (error) => {
      this.setState({
        userSuccess: "",
        userError: error.response.data,
        loggedIn: false});
    });
  }

  handleReadOneUser() {
    this.manageUserService.readOneUser()
    .then((results) => {
      if(results.data.username) {
        this.setState({
          user: results.data,
          loggedIn: true,
          userError: ""
        }, () => this.handleReadAllViewsites());
      }
    },
    (error) => {
      this.setState({
        user: {},
        loggedIn: false,
        userSuccess: ""
      });
    });
  }

  handleUpdateUser() {
    let requestData = {};
    let updatedUser = this.state.user;
    requestData.username = updatedUser.username;
    requestData.password = updatedUser.password;
    this.manageUserService.updateUser(requestData)
    .then((results) => {
      this.setState({
        user: results.data,
        userSuccess: "User updated successfully!",
        userError: ""
      });
    },
    (error) => {
      this.setState({
        userError: error.response.data,
        userSuccess: ""
      });
    });
  }

  handleLoginUser() {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = loginUser.username;
    requestData.password = loginUser.password;
    this.manageUserService.loginUser(requestData)
    .then((results) => {
      this.setState({
        loggedIn: true,
        userSuccess: "",
        userError: ""
      }, () => this.handleReadAllViewsites());
    },
    (error) => {
      this.setState({
        loggedIn: false,
        userSuccess: "",
        userError: error.response.data
      });
    });
  }

  handleLogoutUser() {
    this.manageUserService.logoutUser()
    .then((results) => {
      let logoutUser = {};
      let logoutViewsites = [];
      this.setState({
        user: logoutUser,
        viewsites: logoutViewsites,
        loggedIn: false,
        userSuccess: "",
        userError: "",
        viewsiteError: ""
      });
    },
    (error) => {
      this.setState({
        userError: error.response.data
      });
    });
  }

  handleReadAllViewsites() {
    this.manageViewsiteService.readAllViewsites()
    .then((results) => {
      this.setState({
        viewsites: results.data,
        viewsiteError: ""
      });
    },
    (error) => {
      this.setState({
        viewsiteError: error.response.data
      });
    });
  }

  handleCreateViewsite() {
    let requestData = {};
    let newViewsite = this.state.viewsite;
    requestData.viewsiteName = newViewsite.viewsiteName;
    requestData.loginEnabled = newViewsite.loginEnabled;
    this.manageViewsiteService.createViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsites: results.data,
        viewsiteError: ""
      });
      // Follow up by clearing viewsite state
      this.handleClearViewsiteState();
      $("#createViewsite").hide("medium");
    },
    (error) => {
      this.setState({
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
    requestData.userId = updateViewsite.userId;
    requestData.viewsiteName = updateViewsite.viewsiteName;
    requestData.loginEnabled = updateViewsite.loginEnabled;
    this.manageViewsiteService.updateViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsites: results.data,
        viewsiteError: ""
      });
      // Follow up by clearing viewsite state
      this.handleClearViewsiteState();
      $("#updateViewsite").hide("medium");
    },
    (error) => {
      this.setState({
        viewsiteError: error.response.data
      });
    });
  }

  handleDeleteViewsite(event) {
    let requestData = {};
    requestData.viewsiteId = event._id;
    this.manageViewsiteService.deleteViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsites: results.data,
        viewsiteError: ""
      });
    },
    (error) => {
      this.setState({
        viewsiteError: error.response.data
      });
    });
  }

  handleClearViewsiteState() {
    let clearViewsite = this.state.viewsite;
    clearViewsite._id = "";
    clearViewsite.userId = "";
    clearViewsite.viewsiteName = "";
    clearViewsite.loginEnabled = "";
    this.setState({
      viewsite: clearViewsite
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

  componentWillMount() {
    this.handleReadOneUser();
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
