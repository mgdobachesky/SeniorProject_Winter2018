// Import required modules
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Import requred components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserForm from './components/UserForm';
import Viewsite from './components/Viewsite';
import Home from './components/Home';

var RoutesJSX = function() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />

      <Route path='/login' render={routeProps => <Login {...routeProps}
        user={this.props.user}
        loggedIn={this.props.loggedIn}
        userError={this.props.userError}
        onChange={this.props.onChange}
        onSubmit={this.props.onUserLogin} />} />

      <Route path='/signup' render={routeProps => <UserForm {...routeProps}
        description="Sign Up"
        user={this.props.user}
        loggedIn={this.props.loggedIn}
        userError={this.props.userError}
        onChange={this.props.onChange}
        onSubmit={this.props.onCreateUser} />} />

      <Route path='/dashboard' render={routeProps => <Dashboard {...routeProps}
        user={this.props.user}
        viewsite={this.props.viewsite}
        viewsites={this.props.viewsites}
        loggedIn={this.props.loggedIn}
        userError={this.props.userError}
        viewsiteError={this.props.viewsiteError}
        onChange={this.props.onChange}
        onUpdateUser={this.props.onUpdateUser}
        onCreateViewsite={this.props.onCreateViewsite}
        onEditViewsite={this.props.onEditViewsite}
        onUpdateViewsite={this.props.onUpdateViewsite}
        onDeleteViewsite={this.props.onDeleteViewsite}
        onClearViewsite={this.props.onClearViewsite} />} />

      <Route path='/:viewsiteName' render={routeProps => <Viewsite {...routeProps}
        loggedIn={this.props.loggedIn} />} />
    </Switch>
  );
}

export default RoutesJSX;
