// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import ViewsiteChoose from './components/ViewsiteChoose';
import Viewsite from './components/Viewsite';

/*
 * Body JSX view
 * Used as a React SPA router
 */
var BodyJSX = function() {
  return (
    <Switch>
      <Route
      exact path='/viewsites'
      render={routeProps => <ViewsiteChoose {...routeProps}
        viewsite={this.props.viewsite}
        viewsiteRequestError={this.props.viewsiteRequestError}
        onRequestViewsite={this.handleRequestViewsite} />} />

      <Route
      path='/viewsites/:viewsiteName'
      render={routeProps => <Viewsite {...routeProps}
        viewsite={this.props.viewsite}
        userDatabase={this.props.userDatabase}
        userTables={this.props.userTables}
        onRequestUserDatabase={this.handleRequestUserDatabase} />} />
    </Switch>
  );
}

// Export the Body JSX view
export default BodyJSX;
