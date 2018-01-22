// Import required modules
import React from 'react';

/*
 * Create a table row for each record in the User Table
 * Used by DataViewJSX
 */
function UserList(props) {
  if(props.userUsers && props.userUsers.length >= 1) {
    return props.userUsers.map((userUser, index) => {
      return(
        <tr key={userUser.username}>
          <td>
            <p>
              {userUser.username}
            </p>
          </td>
          <td>
            <a
            href="javascript:;"
            onClick={() => console.log(userUser)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </a>
          </td>
        </tr>
      );
    });
  } else {
    return null;
  }
}

/*
 * UserUsers view
 */
var UserUsersJSX = function() {
  return (
    <div>
      <h4>User Accounts</h4>

        <table className="table table-hover">
          <tbody>
            <UserList
            viewsiteId={this.props.viewsiteId}
            userUsers={this.props.userUsers} />
          </tbody>
        </table>
    </div>
  );
}

// Export the UserUsers view
export default UserUsersJSX;
