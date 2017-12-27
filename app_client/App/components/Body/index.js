// Import required modules
import React from 'react';

// Import requred components
import BodyJSX from './Body.jsx';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // User Methods
    this.handleLoginUser = this.handleLoginUser.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
  }

  handleLoginUser(loginCredentials) {
    this.props.onLoginUser(loginCredentials);
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  render() {
    return(BodyJSX.call(this));
  }
}

export default Body;
