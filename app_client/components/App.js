// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import requred components
import Navbar from './Navbar';
import Login from './Login';
import UserForm from './UserForm';
import UserService from '../services/UserService';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.manageUserService = new UserService();
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.state = {userId: "", username: ""};
  }

  handleUserLogin(event) {
    let data = {};
    data.username = event.username.value;
    data.password = event.password.value;
    this.manageUserService.readOneUser(data).then((results) => {
      this.setState({userId: results.data._id, username: results.data.username});
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogout(event) {
    this.setState({userId: "", username: ""});
  }

  render() {
    const userId = this.state.userId;
    return(
      <Router basename="/">
        <div>
          <Navbar userId={userId} onUserLogout={this.handleUserLogout} />
          <Route exact path='/' component={Home} />
          <Route path='/signup' render={routeProps => <UserForm {...routeProps} title="Sign Up" />} />
          <Route path='/login' render={routeProps => <Login {...routeProps} onUserSubmit={this.handleUserLogin} />} />
        </div>
      </Router>
    );
  }
}
export default App;
