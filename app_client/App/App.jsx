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
      userError={this.state.userError}
      loggedIn={this.state.loggedIn}
      viewsites={this.state.viewsites}
      onLogoutUser={this.handleLogoutUser} />

      <Body
      user={this.state.user}
      userSuccess={this.state.userSuccess}
      userError={this.state.userError}
      loggedIn={this.state.loggedIn}
      viewsite={this.state.viewsite}
      viewsites={this.state.viewsites}
      viewsiteError={this.state.viewsiteError}
      onCreateUser={this.handleCreateUser}
      onUpdateUser={this.handleUpdateUser}
      onLoginUser={this.handleLoginUser}
      onCreateViewsite={this.handleCreateViewsite}
      onEditViewsite={this.handleEditViewsite}
      onUpdateViewsite={this.handleUpdateViewsite}
      onDeleteViewsite={this.handleDeleteViewsite}
      onClearViewsiteState={this.handleClearViewsiteState}
      onChange={this.handleChange} />

      <Footer />
    </div>
  );
}
export default AppJSX;
