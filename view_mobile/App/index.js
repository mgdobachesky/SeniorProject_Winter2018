// Import required modules
import React, { Component } from 'react';


// Import required components
import AppJSX from './App.js';
import './css.js';

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
