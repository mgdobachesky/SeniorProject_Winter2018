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
    this.handleReadOneUser = this.handleReadOneUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    // Viewsite Methods
    this.handleReadAllViewsites = this.handleReadAllViewsites.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);

    // Set initial state
    this.state = {
      user: {},
      viewsites: [],
      loggedIn: false,
      loginSuccess: "",
      loginError: ""
    };
  }

  handleReadOneUser() {
    this.manageUserService.readOneUser()
    .then((results) => {
      if(results.data.username) {
        this.setState({
          user: results.data,
          loggedIn: true
        }, () => this.handleReadAllViewsites());
      }
    },
    (error) => {
      this.setState({
        user: {},
        loggedIn: false,
      });
    });
  }

  handleLoginUser(loginCredentials) {
    let requestData = {};
    requestData.username = loginCredentials.username;
    requestData.password = loginCredentials.password;
    this.manageUserService.loginUser(requestData)
    .then((results) => {
      this.setState({
        user: results.data,
        loggedIn: true,
        loginSuccess: "",
        loginError: ""
      }, () => this.handleReadAllViewsites());
    },
    (error) => {
      this.setState({
        user: {},
        loggedIn: false,
        loginSuccess: "",
        loginError: error.response.data
      });
    });
  }

  handleLogoutUser() {
    this.manageUserService.logoutUser()
    .then((results) => {
      this.setState({
        user: results.data,
        viewsites: [],
        loggedIn: false,
        loginSuccess: "",
        loginError: ""
      });
    },
    (error) => {
      this.setState({
        loginSuccess: "",
        loginError: error.response.data
      });
    });
  }

  handleReadAllViewsites() {
    this.manageViewsiteService.readAllViewsites()
    .then((results) => {
      this.setState({
        viewsites: results.data
      });
    },
    (error) => {
      this.setState({
        viewsites: []
      });
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.setState({
      [toSet]: newStateData
    });
  }

  componentDidMount() {
    this.handleReadOneUser();
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
