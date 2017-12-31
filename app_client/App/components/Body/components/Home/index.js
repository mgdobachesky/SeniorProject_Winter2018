// Import required modules
import React from 'react';

// Import requred components
import HomeJSX from './Home.jsx';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);
  }

  /*
   * Render the Home view
   */
  render() {
    return(HomeJSX.call(this));
  }
}

// Export the Homepage
export default Home;
