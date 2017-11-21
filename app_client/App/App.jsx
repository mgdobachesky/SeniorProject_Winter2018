// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import Navbar from './components/Navbar';
import Routes from './components/Routes';

// Create main App
class AppJSX extends React.Component {
  render() {
    return(
      <div>
        <Navbar
          user={this.props.user}
          viewsites={this.props.viewsites}
          onUserLogout={this.props.onUserLogout} />

        <Routes
          user={this.props.user}
          viewsite={this.props.viewsite}
          viewsites={this.props.viewsites}
          onChange={this.props.onChange}
          onReadOneUser={this.props.onReadOneUser}
          onCreateUser={this.props.onCreateUser}
          onUpdateUser={this.props.onUpdateUser}
          onCreateViewsite={this.props.onCreateViewsite}
          onEditViewsite={this.props.onEditViewsite}
          onUpdateViewsite={this.props.onUpdateViewsite}
          onDeleteViewsite={this.props.onDeleteViewsite} />
      </div>
    );
  }
}
export default AppJSX;
