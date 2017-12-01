// Import required modules
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Create links for each Viewpage a viewsite owns
function ViewpageLinks(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage) => {
      const viewpageId = viewpage._id;
      const viewpageName = viewpage.viewpageName;
      const viewpageHref = '/' + viewpage._id;
      return (
        <li key={viewpageId} className="nav-item">
          <NavLink
            id={viewpageId}
            className="nav-link"
            to={viewpageHref}>
            {viewpageName}
          </NavLink>
        </li>
      );
    });
  } else {
    return null;
  }
}

var NavbarJSX = function() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">
          {this.props.viewsite.viewsiteName}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <ViewpageLinks viewpages={this.props.viewpages} />
          </ul>
        </div>
      </nav>
    );
}

export default NavbarJSX;
