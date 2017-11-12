// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import requred components
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import User from './components/User';

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
    super(props);
    this.manageUserService = new UserService();
    this.manageViewsiteService = new ViewsiteService();
    this.handleUserSignup = this.handleUserSignup.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.getAllViewsites = this.getAllViewsites.bind(this);
    this.state = {
      user: {
        userId: "",
        username: ""
      },
      viewsites: []
    };
  }

  handleUserSignup(event) {
    let requestData = {};
    requestData.username = event.username.value;
    requestData.password = event.password.value;
    this.manageUserService.createUser(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleUserLogin(event) {
    let requestData = {};
    let loginUser = this.state.user;
    requestData.username = event.username.value;
    requestData.password = event.password.value;
    this.manageUserService.readOneUser(requestData).then((results) => {
      loginUser.userId = results.data._id;
      loginUser.username = results.data.username;
      this.setState({user: loginUser});
      location.hash = "/";
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogout(event) {
    let logoutUser = this.state.user;
    let logoutViewsites = this.state.viewsites;
    logoutUser.userId = "";
    logoutUser.username = "";
    // TODO: Clear viewsite on logout
    logoutViewsites = [];
    this.setState({user: logoutUser, viewsites: logoutViewsites});
    location.hash = "/";
  }

  getAllViewsites(userId) {
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

  render() {
    const user = this.state.user;
    const viewsites = this.state.viewsites;
    this.getAllViewsites(user.userId);
    return(
      <Router basename="/">
        <div>
          <Navbar user={user} viewsites={viewsites} onUserLogout={this.handleUserLogout} />
          <Route exact path='/' component={Home} />
          <Route path='/signup' render={routeProps => <User {...routeProps} title="Sign Up" onSubmit={this.handleUserSignup} />} />
          <Route path='/login' render={routeProps => <Login {...routeProps} onSubmit={this.handleUserLogin} />} />
          <Route path='/dashboard' render={routeProps => <Dashboard {...routeProps} user={user} />} />
        </div>
      </Router>
    );
  }
}
export default App;
