// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import DashboardJSX from './Dashboard.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("#createViewsite").hide();
    $("#updateViewsite").hide();
  }

  render() {
    return (
      <DashboardJSX
        user={this.props.user}
        viewsite={this.props.viewsite}
        viewsites={this.props.viewsites}
        onChange={this.props.onChange}
        onCreateViewsite={this.props.onCreateViewsite}
        onUpdateViewsite={this.props.onUpdateViewsite}
        onEditViewsite={this.props.onEditViewsite}
        onDeleteViewsite={this.props.onDeleteViewsite}
        onUpdateUser={this.props.onUpdateUser} />
    );
  }
}

export default Dashboard;
