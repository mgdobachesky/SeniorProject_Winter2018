// Import required modules
import React from 'react';
import { Text, Content, List, ListItem, H2} from 'native-base';

// Import requred components
import styles from './styles.js';

function DataList(props) {
  if(props.records) {
    return props.records.map((record, index) => {
      let thisRecord = {};
      let thisRecordData = "";
      let thisRecordKey = record._id;
      record.data.forEach(function(datum) {
        thisRecordData += (datum.datum + " - ");
      });
      thisRecord.key = thisRecordKey;
      thisRecord.value = thisRecordData.slice(0, -3);
      return (
        <ListItem
        key={thisRecord.key}
        _id={thisRecord.key}>
          <Text>
            {thisRecord.value}
          </Text>
        </ListItem>
      );
    });
  } else {
    return null;
  }
}

function DisplayList(props) {
  if(props.userTable.records) {
    return(
      <List>
        <DataList
        records={props.userTable.records} />
      </List>
    );
  } else {
    return null;
  }
}

var DataViewJSX = function() {
  let userTable = {};
  for(const table of this.props.userDatabase.tables) {
    if(table._id == this.props.element.formId) {
      userTable = table;
    }
  }
  let formTitle = "";
  if(this.props.userTables) {
    for(const table of this.props.userTables) {
      if(table._id == this.props.element.formId) {
        formTitle = table.formTitle;
      }
    }
  }
  return (
    <Content>
      <H2>
        {formTitle}
      </H2>

      <DisplayList
      userTable={userTable} />
    </Content>
  );
}

export default DataViewJSX;
