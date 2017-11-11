// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import requred components
import Navbar from './components/Navbar';
import Login from './components/Login';
import User from './components/User';
import Viewsites from './components/Viewsites';

// Import required services
import UserService from './services/UserService';

const Home = () => (
  <div className="container">
    <h1>Home</h1>
    <p>Welcome to the Cadre Website!</p>
  </div>
);

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.manageUserService = new UserService();
    this.handleUserSignup = this.handleUserSignup.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.state = {
      user: {
        userId: "",
        username: ""
      }
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
    logoutUser.userId = "";
    logoutUser.username = "";
    this.setState({user: logoutUser});
    location.hash = "/";
  }

  render() {
    const user = this.state.user;
    return(
      <Router basename="/">
        <div>
          <Navbar user={user} onUserLogout={this.handleUserLogout} />
          <Route exact path='/' component={Home} />
          <Route path='/signup' render={routeProps => <User {...routeProps} title="Sign Up" onSubmit={this.handleUserSignup} />} />
          <Route path='/login' render={routeProps => <Login {...routeProps} onSubmit={this.handleUserLogin} />} />
          <Route path='/viewsites' render={routeProps => <Viewsites {...routeProps} user={user} />} />
        </div>
      </Router>
    );
  }
}
export default App;
