// Import required modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import requred components
import Viewpage from './components/Viewpage';
import ViewsiteChoose from './components/ViewsiteChoose';
import ViewsiteLanding from './components/ViewsiteLanding';

var BodyJSX = function() {
  return (
    <Switch>
      <Route
      exact path='/viewsites'
      render={routeProps => <ViewsiteChoose {...routeProps}
        viewsite={this.props.viewsite}
        viewsiteRequestError={this.props.viewsiteRequestError}
        onRequestViewsite={this.props.onRequestViewsite} />} />

      <Route
      exact path='/viewsites/:viewsiteName'
      render={routeProps => <ViewsiteLanding {...routeProps}
        viewsite={this.props.viewsite} />} />

      <Route
      path='/viewsites/:viewsiteName/:viewpageId'
      component={Viewpage} />
    </Switch>
  );
}

export default BodyJSX;
