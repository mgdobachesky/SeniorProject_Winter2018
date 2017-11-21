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
        onChange={this.props.onChange}
        onSubmit={this.props.onReadOneUser} />} />

      <Route path='/signup' render={routeProps => <UserForm {...routeProps}
        description="Sign Up"
        user={this.props.user}
        onChange={this.props.onChange}
        onSubmit={this.props.onCreateUser} />} />

      <Route path='/dashboard' render={routeProps => <Dashboard {...routeProps}
        user={this.props.user}
        viewsite={this.props.viewsite}
        viewsites={this.props.viewsites}
        onChange={this.props.onChange}
        onUpdateUser={this.props.onUpdateUser}
        onCreateViewsite={this.props.onCreateViewsite}
        onEditViewsite={this.props.onEditViewsite}
        onUpdateViewsite={this.props.onUpdateViewsite}
        onDeleteViewsite={this.props.onDeleteViewsite} />} />

      <Route path='/:viewsiteName' component={Viewsite} />
    </Switch>
  );
}

export default RoutesJSX;
