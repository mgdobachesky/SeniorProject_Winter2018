// Import required modules
import React from 'react';

// Import requred components
import ViewpageJSX from './Viewpage.jsx';
import './viewpage.css';

class Viewpage extends React.Component {
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
    return(ViewpageJSX.call(this));
  }
}

export default Viewpage;
