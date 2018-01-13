// Import required modules
import React from 'react';
import { NavLink } from 'react-router-dom';

/*
 * Create links for each Viewpage a viewsite owns
 * Used in HeaderJSX
 */
function ViewpageLinks(props) {
  if(props.viewsite && props.viewpages) {
    const viewsiteName = props.viewsite.viewsiteName;
    return props.viewpages.map((viewpage) => {
      const viewpageId = viewpage._id;
      const viewpageName = viewpage.viewpageName;
      const viewpageLink = '#' + viewpageId;
      return (
          <NavLink
          key={viewpageId}
          className="nav-item nav-link"
          id={viewpageId + "-tab"}
          data-toggle="tab"
          to={viewpageLink}
          role="tab"
          aria-controls={viewpageId}
          aria-selected="false">
            {viewpageName}
          </NavLink>
      );
    });
  } else {
    return null;
  }
}

/*
 * Header JSX view
 */
var HeaderJSX = function() {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-primary">
      <a
      className="navbar-brand nav-item nav-link active"
      id="landingPage"
      href={this.props.viewsite.viewsiteName}
      aria-controls="landingPage"
      aria-selected="true">
        {this.props.viewsite.viewsiteName}
      </a>

      <button
      className="navbar-toggler ml-auto p-2"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nav navbar-nav" id="nav-tab" role="tablist">
          <ViewpageLinks
          viewsite={this.props.viewsite}
          viewpages={this.props.viewsite.viewpages} />
        </div>
      </div>
    </nav>
  );
}

// Export the Header JSX view
export default HeaderJSX;
