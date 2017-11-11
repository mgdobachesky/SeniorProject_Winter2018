// Navbar Component
import React, { Component } from 'react';

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
    // Define user state to check if a user is logged in
    const user = this.props.user;

    // Options for customizing the navbar based on state
    let loginOptions = null;
    let viewsiteLink = null;

    // Choose login options based on user state
    if(user.userId) {
      loginOptions = (
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" onClick={this.handleUserLogout}>Logout</a>
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

    // Choose navbar options based on user state
    if(user.userId) {
      viewsiteLink = (
        <li className="nav-item">
          <a className="nav-link" href="#/viewsites">Viewsites</a>
        </li>
      );
    }

    // Return navbar for rendering
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Cadre</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            {viewsiteLink}
          </ul>
          {loginOptions}
        </div>
      </nav>
    );
  }
}
export default Navbar;
