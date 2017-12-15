// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import Header from './components/Header';
import Body from './components/Body';

// Create main App
var AppJSX = function() {
  return(
    <div>
      <Header
        viewsite={this.state.viewsite}
        viewpages={this.state.viewpages} />
      <Body />
    </div>
  );
}
export default AppJSX;
