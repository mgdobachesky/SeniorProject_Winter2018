// Import required modules
import React from 'react';

// Import requred components
import HeaderJSX from './Header.jsx';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.viewsite) {
      return(HeaderJSX.call(this));
    } else {
      return null;
    }
  }
}

export default Header;
