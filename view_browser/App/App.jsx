// Import required modules
import React from 'react';

// Import requred components
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

/*
 * Main Application
 */
var AppJSX = function() {
  return(
    <div>
      <Header
      viewsite={this.state.viewsite} />

      <Body
      viewsite={this.state.viewsite}
      userDatabase={this.state.userDatabase}
      viewsiteRequestError={this.state.viewsiteRequestError}
      userForms={this.state.userForms}
      onRequestViewsite={this.handleRequestViewsite}
      onUpdateUserTable={this.handleUpdateUserTable} />

      <Footer
      viewsite={this.state.viewsite} />
    </div>
  );
}

// Export the main Application JSX view
export default AppJSX;
