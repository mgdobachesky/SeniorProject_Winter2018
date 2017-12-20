// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import ViewsiteLandingJSX from './ViewsiteLanding.jsx';
import './viewsiteLanding.css';

class ViewsiteLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.viewsite) {
      return(ViewsiteLandingJSX.call(this));
    } else {
      return(<Redirect to="/viewsites" />);
    }
  }
}

export default ViewsiteLanding;
