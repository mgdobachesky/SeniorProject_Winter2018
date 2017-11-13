// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

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
    super(props);
    this.manageUserService = new UserService();
    this.manageViewsiteService = new ViewsiteService();
    this.handleUserSignup = this.handleUserSignup.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
    this.updateViewsiteState = this.updateViewsiteState.bind(this);
    this.state = {user: {}, viewsites: []};
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
      localStorage.setItem('user', JSON.stringify(results.data));
      loginUser = results.data;
      this.setState({user: loginUser}, () => {
        this.updateViewsiteState();
      });
      location.hash = "/";
    }, function(error) {
      console.log(error.response.data);
    });
  }

  handleUserLogout(event) {
    let logoutUser = this.state.user;
    let logoutViewsites = this.state.viewsites;
    logoutUser = {};
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
      <Router basename="/">
        <div>
          <Navbar user={user} viewsites={viewsites} onUserLogout={this.handleUserLogout} />
          <Route exact path='/' component={Home} />
          <Route path='/signup' render={routeProps => <UserForm {...routeProps} title="Sign Up" onSubmit={this.handleUserSignup} />} />
          <Route path='/login' render={routeProps => <Login {...routeProps} onSubmit={this.handleUserLogin} />} />
          <Route path='/dashboard' render={routeProps => <Dashboard {...routeProps} user={user} viewsites={viewsites} updateViewsiteState={this.updateViewsiteState} />} />
          <Route path='/viewsite/:viewsiteName' component={Viewsite} />
        </div>
      </Router>
    );
  }
}
export default App;
