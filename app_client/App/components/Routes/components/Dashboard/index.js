// Import required modules
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Import requred components
import DashboardJSX from './Dashboard.jsx';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#createViewsite").hide(false);
    $("#updateViewsite").hide(false);
  }

  render() {
    if(this.props.user._id) {
      return(DashboardJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Dashboard;
