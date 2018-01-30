// Import required modules
import React from 'react';

// Import requred components
import UserUsersJSX from './UserUsers.jsx';
import './userUsers.css';

class UserUsers extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);
  }

  /*
   * Render the UserUsers view
   */
  render() {
    if(this.props.userUsers.length >= 1) {
      return(UserUsersJSX.call(this));
    } else {
      return null;
    }
  }
}

// Export the User Table
export default UserUsers;
