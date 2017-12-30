// Import required modules
import React from 'react';

// Import requred components
import ViewsiteJSX from './Viewsite.jsx';
import './viewsite.css';

class Viewsite extends React.Component {
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
    return(ViewsiteJSX.call(this));
  }
}

export default Viewsite;
