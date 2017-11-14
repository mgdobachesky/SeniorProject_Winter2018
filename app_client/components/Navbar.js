// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    // Define props as variables
    const user = this.props.user;
    const viewsites = this.props.viewsites;

    // Options for customizing the navbar based on state
    let loginOptions = null;
    let dashboardLink = null;
    let viewsiteLinks = null;

    // Choose login options based on user state
    if(user._id) {
      loginOptions = (
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="javascript:;" onClick={this.handleUserLogout}>Logout</a>
          </li>
        </ul>
      );
    } else {
      loginOptions = (
        <ul className="navbar-nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign-Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>
      );
    }

    // Choose navbar options based on user state
    if(user._id) {
      dashboardLink = (
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
        </li>
      );
    }

    // Create links for each Viewsite
    if(viewsites) {
      viewsiteLinks = viewsites.map((viewsite) => {
        const viewsiteId = viewsite._id;
        const viewsiteName = viewsite.viewsiteName;
        const viewsiteHref = '/viewsite/' + viewsite.viewsiteName;
        return (
          <li key={viewsiteId} className="nav-item">
            <Link id={viewsiteId} className="nav-link" to={viewsiteHref}>{viewsiteName}</Link>
          </li>
        );
      });
    }

    // Return navbar for rendering
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Cadre</Link>
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
