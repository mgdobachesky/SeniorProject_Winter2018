// Navbar Component
import React, { Component } from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.onUserLogout(event.target);
  }

  render() {
    const userId = this.props.userId;
    let loginOptions = null;
    if(userId) {
      loginOptions = (
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#/logout" onClick={this.handleLogout}>Logout</a>
          </li>
        </ul>
      );
    } else {
      loginOptions = (
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#/signup">Sign-Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login">Login</a>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Cadre</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
          </ul>
          {loginOptions}
        </div>
      </nav>
    );
  }
}
export default Navbar;
