// Import required modules
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

// Import requred components
import Viewpage from './components/Viewpage';

var RoutesJSX = function() {
  return (
    <Switch>
      <Route path='/:viewpageId' component={Viewpage} />
    </Switch>
  );
}

export default RoutesJSX;
