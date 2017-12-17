// Import required modules
import React from 'react';

// Import requred components
import BodyJSX from './Body.jsx';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(BodyJSX.call(this));
  }
}

export default Body;
