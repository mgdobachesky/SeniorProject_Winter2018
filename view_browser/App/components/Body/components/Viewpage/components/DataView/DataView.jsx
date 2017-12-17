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
  return (
    <div>
      <h2>{this.props.dataView.form.formTitle}</h2>
      <table className="table table-hover">
        <tbody>
          <Records userTable={this.props.dataView.userTable} />
        </tbody>
      </table>
    </div>
  );
}

export default DataViewJSX;
