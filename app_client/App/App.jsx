// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import Navbar from './components/Navbar';
import Routes from './components/Routes';

// Create main App
var AppJSX = function() {
  return(
    <div>
      <Navbar
        user={this.state.user}
        viewsites={this.state.viewsites}
        onUserLogout={this.handleUserLogout} />

      <Routes
        user={this.state.user}
        viewsite={this.state.viewsite}
        viewsites={this.state.viewsites}
        onChange={this.handleChange}
        onReadOneUser={this.handleReadOneUser}
        onCreateUser={this.handleCreateUser}
        onUpdateUser={this.handleUpdateUser}
        onCreateViewsite={this.handleCreateViewsite}
        onEditViewsite={this.handleEditViewsite}
        onUpdateViewsite={this.handleUpdateViewsite}
        onDeleteViewsite={this.handleDeleteViewsite}
        onClearViewsite={this.handleClearViewsite} />
    </div>
  );
}
export default AppJSX;
