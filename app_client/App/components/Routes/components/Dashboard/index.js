// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import DashboardJSX from './Dashboard.jsx';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#createViewsite").hide();
    $("#updateViewsite").hide();
  }

  render() {
    return(DashboardJSX.call(this));
  }
}

export default Dashboard;
