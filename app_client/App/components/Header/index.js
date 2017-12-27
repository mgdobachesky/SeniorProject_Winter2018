// Import required modules
import React from 'react';

// Import requred components
import HeaderJSX from './Header.jsx';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // User Methods
    this.handleLogoutUser = this.handleLogoutUser.bind(this);
  }

  handleLogoutUser() {
    this.props.onLogoutUser();
  }

  render() {
    return (HeaderJSX.call(this));
  }
}

export default Header;
