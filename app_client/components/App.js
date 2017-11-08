// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import requred components
import Navbar from './Navbar';
import UserForm from './UserForm';
import UserService from '../services/UserService';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.manageUserService = new UserService();
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserSignup = this.handleUserSignup.bind(this);
    this.state = {userId: ""};
  }

  handleUserLogin(event) {
    let data = {};
    data.username = event.username.value;
    data.password = event.password.value;
    this.manageUserService.readOneUser(data).then(function(results) {
      console.log(results.data);
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserSignup(event) {
    let data = {};
    data.username = event.username.value;
    data.password = event.password.value;
    this.manageUserService.createUser(data).then(function(results) {
      console.log(results.data);
    }, function(error) {
      console.log(error.response.data);
    });
  }

  render() {
    const userId = this.state.userId;
    console.log(userId);
    return(
      <Router basename="/">
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/signup' render={routeProps => <UserForm {...routeProps} title="Sign Up" onUserSubmit={this.handleUserSignup} />} />
          <Route path='/login' render={routeProps => <UserForm {...routeProps} title="Login" onUserSubmit={this.handleUserLogin} />} />
        </div>
      </Router>
    );
  }
}
export default App;
