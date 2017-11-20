// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import NavbarJSX from './Navbar.jsx';

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
    return (
      <NavbarJSX
        user={this.props.user}
        viewsites={this.props.viewsites}
        onUserLogout={this.handleUserLogout} />
    );
  }
}

export default Navbar;
