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
        viewsite={this.state.viewsite}
        viewpages={this.state.viewpages} />
      <Routes />
    </div>
  );
}
export default AppJSX;
