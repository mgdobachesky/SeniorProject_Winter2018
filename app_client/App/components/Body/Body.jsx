// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserForm from './components/UserForm';
import Viewsite from './components/Viewsite';
import Home from './components/Home';

var BodyJSX = function() {
  return (
    <Switch>
      <Route
      exact path='/'
      component={Home} />

      <Route
      path='/login'
      render={routeProps => <Login {...routeProps}
        user={this.props.user}
        userError={this.props.userError}
        loggedIn={this.props.loggedIn}
        onChange={this.handleChange}
        onSubmit={this.handleLoginUser} />} />

      <Route
      path='/signup'
      render={routeProps => <UserForm {...routeProps}
        description="Sign Up"
        user={this.props.user}
        loggedIn={this.props.loggedIn}
        userError={this.props.userError}
        onChange={this.handleChange}
        onSubmit={this.handleCreateUser} />} />

      <Route
      path='/dashboard'
      render={routeProps => <Dashboard {...routeProps}
        user={this.props.user}
        userSuccess={this.props.userSuccess}
        userError={this.props.userError}
        loggedIn={this.props.loggedIn}
        viewsite={this.props.viewsite}
        viewsites={this.props.viewsites}
        viewsiteError={this.props.viewsiteError}
        onUpdateUser={this.handleUpdateUser}
        onCreateViewsite={this.handleCreateViewsite}
        onEditViewsite={this.handleEditViewsite}
        onUpdateViewsite={this.handleUpdateViewsite}
        onDeleteViewsite={this.handleDeleteViewsite}
        onClearViewsiteState={this.handleClearViewsiteState}
        onChange={this.handleChange} />} />

      <Route
      path='/:viewsiteName'
      render={routeProps => <Viewsite {...routeProps}
        loggedIn={this.props.loggedIn} />} />
    </Switch>
  );
}

export default BodyJSX;
