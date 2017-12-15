// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import HeaderJSX from './Header.jsx';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (HeaderJSX.call(this));
  }
}

export default Header;
