// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import RoutesJSX from './Routes.jsx';
import './routes.css';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RoutesJSX
          user={this.props.user}
          viewsite={this.props.viewsite}
          viewsites={this.props.viewsites}
          onChange={this.props.onChange}
          onReadOneUser={this.props.onReadOneUser}
          onCreateUser={this.props.onCreateUser}
          onUpdateUser={this.props.onUpdateUser}
          onCreateViewsite={this.props.onCreateViewsite}
          onEditViewsite={this.props.onEditViewsite}
          onUpdateViewsite={this.props.onUpdateViewsite}
          onDeleteViewsite={this.props.onDeleteViewsite} />
      </div>
    );
  }
}

export default Routes;
