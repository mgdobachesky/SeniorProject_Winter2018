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

    // User Methods
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    // Viewsite Methods
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    this.handleClearViewsiteState = this.handleClearViewsiteState.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleUpdateUser() {
    this.props.onUpdateUser();
  }

  handleCreateViewsite() {
    this.props.onCreateViewsite();
  }

  handleEditViewsite(event) {
    this.props.onEditViewsite(event);
  }

  handleUpdateViewsite() {
    this.props.onUpdateViewsite();
  }

  handleDeleteViewsite(event) {
    this.props.onDeleteViewsite(event);
  }

  handleClearViewsiteState() {
    this.props.onClearViewsiteState();
  }

  handleChange(event, toChange) {
    this.props.onChange(event, toChange);
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
