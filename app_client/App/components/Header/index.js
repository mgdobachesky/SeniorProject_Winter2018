// Import required modules
import React from 'react';

// Import requred components
import HeaderJSX from './Header.jsx';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }

  handleUserLogout(event) {
    event.preventDefault();
    this.props.onUserLogout(event.target);
  }

  render() {
    return (HeaderJSX.call(this));
  }
}

export default Header;
