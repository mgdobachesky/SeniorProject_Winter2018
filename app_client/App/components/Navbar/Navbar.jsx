// Import required modules
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Choose navbar options based on user state
function NavbarOptions(props) {
  if(props.user._id) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
      </li>
    );
  } else {
    return null;
  }
}

// Create links for each Viewsite a user owns
function ViewsiteLinks(props) {
  if(props.viewsites) {
    return props.viewsites.map((viewsite) => {
      const viewsiteId = viewsite._id;
      const viewsiteName = viewsite.viewsiteName;
      const viewsiteHref = '/' + viewsite.viewsiteName;
      return (
        <li key={viewsiteId} className="nav-item">
          <NavLink id={viewsiteId} className="nav-link" to={viewsiteHref}>{viewsiteName}</NavLink>
        </li>
      );
    });
  } else {
    return null;
  }
}

// Choose login options based on user state
function LoginOptions(props) {
  if(props.user._id) {
    return (
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="javascript:;" onClick={props.onLogout}>Logout</a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign-Up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    );
  }
}

var NavbarJSX = function() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Cadre</NavLink>
        <ul className="navbar-nav mr-auto">
          <NavbarOptions user={this.props.user} />
        </ul>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <ViewsiteLinks viewsites={this.props.viewsites} />
          </ul>
          <LoginOptions user={this.props.user} onLogout={this.handleUserLogout} />
        </div>
      </nav>
    );
}

export default NavbarJSX;
