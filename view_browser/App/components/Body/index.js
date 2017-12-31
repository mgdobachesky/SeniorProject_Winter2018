// Import required modules
import React from 'react';

// Import requred components
import BodyJSX from './Body.jsx';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Viewsite Methods
    this.handleRequestViewsite = this.handleRequestViewsite.bind(this);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);
  }

  /*
   * Method that allows components to request a Viewsite
   * Passed down from the main Application
   */
  handleRequestViewsite(viewsiteName) {
    this.props.onRequestViewsite(viewsiteName);
  }

  /*
   * Method that allows components to request a Viewsite's associated User Database
   * Passed down from the main Application
   */
  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  /*
   * Render the Body JSX view
   */
  render() {
    return(BodyJSX.call(this));
  }
}

// Export the Body
export default Body;
