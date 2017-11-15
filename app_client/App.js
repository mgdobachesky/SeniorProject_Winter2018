// Import required modules
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserForm from './components/UserForm';
import Viewsite from './components/Viewsite';

// Import required services
import UserService from './services/UserService';
import ViewsiteService from './services/ViewsiteService';

const Home = () => (
  <div className="container">
    <h1>Cadre</h1>
    <p>Welcome to the Cadre Website!</p>
  </div>
);

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
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.updateViewsiteState = this.updateViewsiteState.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    // Set initial state
    this.state = {user: {
      _id: "",
      username: "",
      password: ""
    }, viewsites: []};
  }

  handleCreateUser(event) {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = loginUser.username;
    requestData.password = loginUser.password;
    this.manageUserService.createUser(requestData).then((results) => {
      this.handleReadOneUser(event);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadOneUser(event) {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = loginUser.username;
    requestData.password = loginUser.password;
    this.manageUserService.readOneUser(requestData).then((results) => {
      let foundUser = {};
      foundUser._id = results.data._id;
      foundUser.username = results.data.username;
      // Set user in local storage for login persistence
      localStorage.setItem('user', JSON.stringify(foundUser));
      // Set user in state
      this.setState({user: foundUser}, () => {
        // Update the list of viewsites in state
        this.updateViewsiteState();
      });
      location.hash = "/";
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUpdateUser(event) {
    let requestData = {};
    let user = this.state.user;
    requestData.userId = user._id;
    requestData.username = user.username;
    requestData.password = user.password;
    this.manageUserService.updateUser(requestData).then((results) => {
      // Set user in local storage for login persistence
      localStorage.setItem('user', JSON.stringify(user));
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogout(event) {
    let logoutUser = this.state.user;
    let logoutViewsites = this.state.viewsites;
    logoutUser = {
      _id: "",
      username: "",
      password: ""
    };
    logoutViewsites = [];
    this.setState({
      user: logoutUser,
      viewsites: logoutViewsites
    });
    localStorage.removeItem('user');
    location.hash = "/";
  }

  updateViewsiteState() {
    const userId = this.state.user._id;
    if(userId) {
      let requestData = {};
      requestData.userId = userId;
      this.manageViewsiteService.readAllViewsites(requestData).then((results) => {
        this.setState({viewsites: results.data});
      }, (error) => {
        console.log(error.response.data);
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changedUser = this.state.user;
    changedUser[name] = value;
    this.setState({
      user: changedUser
    });
  }

  componentWillMount() {
    let loginUser = this.state.user;
    let user = localStorage.getItem('user');
    if(user) {
      loginUser = JSON.parse(user);
      this.setState({user: loginUser}, () => {
        this.updateViewsiteState();
      });
    }
  }

  render() {
    const user = this.state.user;
    const viewsites = this.state.viewsites;
    return(
      <div>

        <Navbar
          user={user}
          viewsites={viewsites}
          onUserLogout={this.handleUserLogout} />

        <Switch>

          <Route exact path='/' component={Home} />

          <Route path='/login' render={routeProps => <Login {...routeProps}
            user = {user}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleReadOneUser} />} />

          <Route path='/signup' render={routeProps => <UserForm {...routeProps}
            description="Sign Up"
            user = {user}
            onInputChange={this.handleInputChange}
            onSubmit={this.handleCreateUser} />} />

          <Route path='/dashboard' render={routeProps => <Dashboard {...routeProps}
            user={user}
            viewsites={viewsites}
            updateViewsiteState={this.updateViewsiteState}
            onInputChange={this.handleInputChange}
            onUpdateUser={this.handleUpdateUser} />} />

          <Route path='/:viewsiteName' component={Viewsite} />

        </Switch>

      </div>
    );
  }
}
export default App;
