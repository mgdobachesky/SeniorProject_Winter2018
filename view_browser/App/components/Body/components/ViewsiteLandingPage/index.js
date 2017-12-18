// Import required modules
import React from 'react';

// Import requred components
import ViewsiteLandingPageJSX from './ViewsiteLandingPage.jsx';
import './viewsiteLandingPage.css';

class ViewsiteLandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(ViewsiteLandingPageJSX.call(this));
  }
}

export default ViewsiteLandingPage;
