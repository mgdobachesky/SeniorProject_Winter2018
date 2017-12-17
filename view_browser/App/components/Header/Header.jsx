// Import required modules
import React from 'react';
import { NavLink } from 'react-router-dom';

// Create links for each Viewpage a viewsite owns
function ViewpageLinks(props) {
  if(props.viewsite && props.viewpages) {
    const viewsiteName = props.viewsite.viewsiteName;
    return props.viewpages.map((viewpage) => {
      const viewpageId = viewpage._id;
      const viewpageName = viewpage.viewpageName;
      const viewpageHref = '/viewsites/' + viewsiteName + "/" + viewpageId;
      return (
        <li
        key={viewpageId}
        className="nav-item">

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

var HeaderJSX = function() {
  return (
    <nav
    className="navbar navbar-expand-lg navbar-dark bg-primary">

      <NavLink
      className="navbar-brand"
      to={"/viewsites/" + this.props.viewsite.viewsiteName}>
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
        <span
        className="navbar-toggler-icon" />
      </button>

      <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent">

        <ul
        className="navbar-nav mr-auto">

          <ViewpageLinks
          viewpages={this.props.viewpages}
          viewsite={this.props.viewsite} />

        </ul>
      </div>
    </nav>
  );
}

export default HeaderJSX;
