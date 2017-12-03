// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    // Bind 'this' to class methods
    this.manageUserService = new UserService();
    this.manageViewsiteService = new ViewsiteService();
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleReadOneUser = this.handleReadOneUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.handleReadAllViewsites = this.handleReadAllViewsites.bind(this);
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    this.handleClearViewsite = this.handleClearViewsite.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // Set initial state
    this.state = {
      user: {
        username: "",
        password: ""
      },
      viewsite: {
        _id: "",
        viewsiteName: "",
        loginEnabled: false
      },
      viewsites: [],
      loggedIn: false};
    }

  handleCreateUser(event) {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = loginUser.username;
    requestData.password = loginUser.password;
    this.manageUserService.createUser(requestData).then((results) => {
      this.handleUserLogin(event);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadOneUser(event) {
    this.manageUserService.readOneUser().then((results) => {
      if(results.data.username) {
        this.setState({user: results.data, loggedIn: true}, () => this.handleReadAllViewsites());
      }
    });
  }

  handleUpdateUser(event) {
    let requestData = {};
    let user = this.state.user;
    requestData.username = user.username;
    requestData.password = user.password;
    this.manageUserService.updateUser(requestData).then((results) => {
      console.log(results.data);
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogin(event) {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = loginUser.username;
    requestData.password = loginUser.password;
    this.manageUserService.loginUser(requestData).then((results) => {
      this.handleReadOneUser();
      location.hash = "/";
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogout(event) {
    this.manageUserService.logoutUser().then((results) => {
      console.log(results.data);
      let logoutUser = this.state.user;
      let logoutViewsites = this.state.viewsites;
      logoutUser = {
        username: "",
        password: ""
      };
      logoutViewsites = [];
      this.setState({
        user: logoutUser,
        viewsites: logoutViewsites,
        loggedIn: false
      });
      location.hash = "/";
    });
  }

  handleReadAllViewsites() {
    this.manageViewsiteService.readAllViewsites().then((results) => {
      this.setState({viewsites: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleCreateViewsite(event) {
    let requestData = {};
    let newViewsite = this.state.viewsite;
    requestData.viewsiteName = newViewsite.viewsiteName;
    requestData.loginEnabled = newViewsite.loginEnabled;
    this.manageViewsiteService.createViewsite(requestData).then((results) => {
      console.log(results.data);
      this.handleReadAllViewsites();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing viewsite state
    this.handleClearViewsite();
    $("#createViewsite").hide("medium");
  }

  handleEditViewsite(event) {
    let editViewsite = this.state.viewsite;
    editViewsite._id = event._id;
    editViewsite.viewsiteName = event.viewsiteName;
    editViewsite.loginEnabled = event.loginEnabled;
    this.setState({viewsite: editViewsite});
    $("#updateViewsite").toggle("medium");
    $("#createViewsite").hide(false);
  }

  handleUpdateViewsite(event) {
    // Update Viewsite
    let requestData = {};
    let updateViewsite = this.state.viewsite;
    requestData.viewsiteId = updateViewsite._id;
    requestData.userId = updateViewsite.userId;
    requestData.viewsiteName = updateViewsite.viewsiteName;
    requestData.loginEnabled = updateViewsite.loginEnabled;
    this.manageViewsiteService.updateViewsite(requestData).then((results) => {
      console.log(results.data);
      this.handleReadAllViewsites();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing viewsite state
    this.handleClearViewsite();
    $("#updateViewsite").hide("medium");
  }

  handleDeleteViewsite(event) {
    let requestData = {};
    requestData.viewsiteId = event._id;
    this.manageViewsiteService.deleteViewsite(requestData).then((results) => {
      console.log(results.data);
      this.handleReadAllViewsites();
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleClearViewsite() {
    let clearViewsite = this.state.viewsite;
    clearViewsite._id = "";
    clearViewsite.userId = "";
    clearViewsite.viewsiteName = "";
    clearViewsite.loginEnabled = "";
    this.setState({viewsite: clearViewsite});
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
