// Import required modules
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

// Import requred components
import styles from './styles.js';

var TextViewJSX = function() {
  return (
    <View>
      {this.props.text.textValue.split('\n').map(function(item, key) {
        return (
          <Text key={key}>
            {item}
          </Text>
        )
      })}
    </View>
  );
}

export default TextViewJSX;
