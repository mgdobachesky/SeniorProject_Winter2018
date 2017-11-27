// Import required modules
import React, { Component } from 'react';
import { Text, Content, List, ListItem, H2} from 'native-base';
import { Link } from 'react-router-native';

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
        <ListItem key={thisRecord.key} _id={thisRecord.key}><Text>{thisRecord.value}</Text></ListItem>
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
        <DataList records={props.userTable.records} />
      </List>
    );
  } else {
    return null;
  }
}

var DataViewJSX = function() {
  return (
    <Content>
      <H2>{this.props.dataView.form.formTitle}</H2>
      <DisplayList userTable={this.props.dataView.userTable} />
    </Content>
  );
}

export default DataViewJSX;
