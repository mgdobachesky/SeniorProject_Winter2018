// Import required modules
import React from 'react';

// Import requred components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// Create main App
var AppJSX = function() {
  return(
    <div>
      <Header
      viewsite={this.state.viewsite}
      viewpages={this.state.viewpages} />

      <Body
      viewsiteRequestError={this.state.viewsiteRequestError}
      viewsite={this.state.viewsite}
      onRequestViewsite={this.handleRequestViewsite} />

      <Footer
      viewsite={this.state.viewsite} />
    </div>
  );
}
export default AppJSX;
