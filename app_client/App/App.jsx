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
      user={this.state.user}
      viewsites={this.state.viewsites}
      userError={this.state.userError}
      onUserLogout={this.handleUserLogout}
      loggedIn={this.state.loggedIn} />

      <Body
      user={this.state.user}
      viewsite={this.state.viewsite}
      viewsites={this.state.viewsites}
      userError={this.state.userError}
      userSuccess={this.state.userSuccess}
      viewsiteError={this.state.viewsiteError}
      loggedIn={this.state.loggedIn}
      onChange={this.handleChange}
      onUserLogin={this.handleUserLogin}
      onCreateUser={this.handleCreateUser}
      onUpdateUser={this.handleUpdateUser}
      onCreateViewsite={this.handleCreateViewsite}
      onEditViewsite={this.handleEditViewsite}
      onUpdateViewsite={this.handleUpdateViewsite}
      onDeleteViewsite={this.handleDeleteViewsite}
      onClearViewsite={this.handleClearViewsiteState} />

      <Footer />
    </div>
  );
}
export default AppJSX;
