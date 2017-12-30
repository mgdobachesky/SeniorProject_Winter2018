// Import required modules
import React from 'react';

// Import requred components
import AppContentJSX from './AppContent.js';

class AppContent extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);
  }

  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  render() {
    return(AppContentJSX.call(this));
  }
}

export default AppContent;
