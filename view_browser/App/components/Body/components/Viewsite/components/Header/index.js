// Import required modules
import React from 'react';

// Import required components
import HeaderJSX from './Header.jsx';
import './header.scss';

class Header extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);
  }

  /*
   * Render Text Element JSX view
   */
  render() {
    return(HeaderJSX.call(this));
  }
}

// Export Text Element
export default Header;
