// Import required modules
import React from 'react';

// Import requred components
import UserTableJSX from './UserTable.jsx';
import './userTable.css';

// Import required services
import UserRecordService from './services/UserRecordService';

class UserTable extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageUserRecordService = new UserRecordService();
  }

  /*
   * Render the UserTable view
   */
  render() {
    return(UserTableJSX.call(this));
  }
}

// Export the User Table
export default UserTable;
