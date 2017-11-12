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
    const viewsites = this.props.viewsites;

    // Options for customizing the navbar based on state
    let loginOptions = null;
    let dashboardLink = null;
    let viewsiteLinks = null;

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
      dashboardLink = (
        <li className="nav-item active">
          <a className="nav-link" href="#/dashboard">Dashboard <span className="sr-only">(current)</span></a>
        </li>
      );
    }

    // Create links for each Viewsite
    if(viewsites) {
      viewsiteLinks = viewsites.map((viewsite) => {
        const viewsiteId = viewsite._id;
        const viewsiteName = viewsite.viewsiteName;
        const viewsiteHref = '#/' + viewsite.viewsiteName;
        return (
          <li key={viewsiteId} className="nav-item">
            <a id={viewsiteId} className="nav-link" href={viewsiteHref}>{viewsiteName}</a>
          </li>
        );
      });
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
            {dashboardLink}
            {viewsiteLinks}
          </ul>
          {loginOptions}
        </div>
      </nav>
    );
  }
}
export default Navbar;
