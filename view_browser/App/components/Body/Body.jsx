// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import Viewpage from './components/Viewpage';
import ViewsiteLandingPage from './components/ViewsiteLandingPage';

var BodyJSX = function() {
  return (
    <Switch>
      <Route
      exact path='/viewsites/:viewsiteName'
      component={ViewsiteLandingPage} />

      <Route
      path='/viewsites/:viewsiteName/:viewpageId'
      component={Viewpage} />
    </Switch>
  );
}

export default BodyJSX;
