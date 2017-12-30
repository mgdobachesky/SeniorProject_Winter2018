// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import LandingPageJSX from './LandingPage.jsx';
import './landingPage.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.viewsite) {
      return(LandingPageJSX.call(this));
    } else {
      return(<Redirect to="/viewsites" />);
    }
  }
}

export default LandingPage;
