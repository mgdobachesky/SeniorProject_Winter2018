// Import required modules
import React from 'react';

// Import requred components
import FooterJSX from './Footer.jsx';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(FooterJSX.call(this));
  }
}

export default Footer;
