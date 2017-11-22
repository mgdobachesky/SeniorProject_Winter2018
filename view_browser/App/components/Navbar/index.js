// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import NavbarJSX from './Navbar.jsx';
import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (NavbarJSX.call(this));
  }
}

export default Navbar;
