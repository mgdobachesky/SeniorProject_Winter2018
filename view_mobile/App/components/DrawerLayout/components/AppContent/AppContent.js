// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-native';

// Import requred components
import Viewpage from './components/Viewpage';
import styles from './styles.js';

/*
 * Application Content JSX
 * Used as a router for React Native navigation
 */
var AppContentJSX = function() {
  return (
    <Switch>
      <Route
      path='/:viewpageId'
      render={routeProps => <Viewpage {...routeProps}
        viewpages={this.props.viewpages}
        userDatabase={this.props.userDatabase}
        userTables={this.props.userTables}
        onRequestUserDatabase={this.handleRequestUserDatabase} />} />
    </Switch>
  );
}

// Export the Application Content JSX
export default AppContentJSX;
