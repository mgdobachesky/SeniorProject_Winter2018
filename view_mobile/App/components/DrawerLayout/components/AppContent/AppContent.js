// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-native';

// Import requred components
import Viewpage from './components/Viewpage';
import styles from './styles.js';

var AppContentJSX = function() {
  return (
    <Switch>
      <Route
      path='/:viewpageId'
      component={Viewpage} />
    </Switch>
  );
}

export default AppContentJSX;