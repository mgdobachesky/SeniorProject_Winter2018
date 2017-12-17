// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import Viewpage from './components/Viewpage';

var BodyJSX = function() {
  return (
    <Switch>
      <Route path='/viewsites/:viewsiteName/:viewpageId' component={Viewpage} />
    </Switch>
  );
}

export default BodyJSX;
