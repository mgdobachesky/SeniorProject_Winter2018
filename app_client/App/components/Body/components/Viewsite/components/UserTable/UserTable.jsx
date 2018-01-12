// Import required modules
import React from 'react';

/*
 * Create a cell for each datum in the record set
 * Used by Records
 */
function Data(props) {
  if(props.record.data && props.record.data.length >= 1) {
    return props.record.data.map((datum, index) => {
      return(
        <td key={datum._id}>
          {datum.datum}
        </td>
      );
    });
  } else {
    return null;
  }
}

/*
 * Create a table row for each record in the User Table
 * Used by DataViewJSX
 */
function Records(props) {
  if(props.userTable.records && props.userTable.records.length >= 1) {
    return props.userTable.records.map((record, index) => {
      return(
        <tr key={record._id}>
          <Data record={record} />
        </tr>
      );
    });
  } else {
    return null;
  }
}

/*
 * UserTable view
 */
var UserTableJSX = function() {
  return (
    <div>
      <h2>{this.props.userTableHeaders.formTitle}</h2>

        <table className="table table-hover">
          <tbody>
            <Records
            userTable={this.props.userTable} />
          </tbody>
        </table>
    </div>
  );
}

// Export the UserTable view
export default UserTableJSX;
