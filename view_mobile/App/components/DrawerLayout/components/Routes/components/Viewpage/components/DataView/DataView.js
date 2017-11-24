// Import required modules
import React, { Component } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { Link } from 'react-router-native';

// Import requred components
import styles from './styles.js';

function prepareData(records) {
  if(records) {
    let theseRecords = [];
    records.forEach(function(record) {
      let thisRecord = {};
      let thisRecordData = "";
      let thisRecordKey = record._id;
      record.data.forEach(function(datum) {
        thisRecordData += (datum.datum + " - ");
      });
      thisRecord.key = thisRecordKey;
      thisRecord.value = thisRecordData.slice(0, -3);
      theseRecords.push(thisRecord);
    });
    return theseRecords;
  }
}

function DisplayList(props) {
  if(props.userTable.records) {
    let preparedData = prepareData(props.userTable.records);
    return(
      <FlatList
        data={preparedData}
        renderItem={({item}) => <Text>{item.value}</Text>} />
    );
  } else {
    return null;
  }
}

var DataViewJSX = function() {
  return (
    <View>
      <Text>{this.props.dataView.form.formTitle}</Text>
      <DisplayList userTable={this.props.dataView.userTable} />
    </View>
  );
}

export default DataViewJSX;
