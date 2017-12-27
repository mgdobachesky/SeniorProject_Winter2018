// Import required modules
import React from 'react';

// Import requred components
import BodyJSX from './Body.jsx';
import './body.css';

class Body extends React.Component {
  constructor(props) {
    /// Call parent constructor
    super(props);

    // User Methods
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    // Viewsite Methods
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleUpdateViewsite = this.handleUpdateViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
    this.handleClearViewsiteState = this.handleClearViewsiteState.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
  }

  handleCreateUser() {
    this.props.onCreateUser();
  }

  handleUpdateUser() {
    this.props.onUpdateUser();
  }

  handleLoginUser() {
    this.props.onLoginUser();
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

  render() {
    return(BodyJSX.call(this));
  }
}

export default Body;
