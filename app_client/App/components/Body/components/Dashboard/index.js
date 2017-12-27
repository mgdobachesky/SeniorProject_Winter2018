// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import DashboardJSX from './Dashboard.jsx';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  componentDidMount() {
    $("#createViewsite").hide(false);
    $("#updateViewsite").hide(false);
  }

  render() {
    if(this.props.loggedIn) {
      return(DashboardJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Dashboard;
