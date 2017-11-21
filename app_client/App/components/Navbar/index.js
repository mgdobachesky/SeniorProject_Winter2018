// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import NavbarJSX from './Navbar.jsx';
import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }

  handleUserLogout(event) {
    event.preventDefault();
    this.props.onUserLogout(event.target);
  }

  render() {
    return (NavbarJSX.call(this));
  }
}

export default Navbar;
