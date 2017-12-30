// Import required modules
import React from 'react';

function Data(props) {
  if(props.record.data) {
    return props.record.data.map((datum, index) => {
      return(
        <td key={datum._id}>
          {datum.datum}
        </td>
      );
    });
  }
}

function Records(props) {
  if(props.userTable.records) {
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

var DataViewJSX = function() {
  let userTable = {};
  if(this.props.userDatabase.tables) {
    for(const databaseTable of this.props.userDatabase.tables) {
      if(databaseTable._id === this.props.element.formId) {
        userTable = databaseTable;
      }
    }
  }

  return (
    <div>
      <h2>Data View</h2>

      <table className="table table-hover">
        <tbody>
          <Records
          userTable={userTable} />
        </tbody>
      </table>
    </div>
  );
}

export default DataViewJSX;
