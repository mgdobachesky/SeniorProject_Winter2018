// Import required modules
import React, { Component } from 'react';
import { Content, Text } from 'native-base';
import { Link } from 'react-router-native';

// Import requred components
import styles from './styles.js';

var TextViewJSX = function() {
  return (
    <Content>
      {this.props.text.textValue.split('\n').map(function(item, key) {
        return (
          <Text key={key}>
            {item}
          </Text>
        )
      })}
    </Content>
  );
}

export default TextViewJSX;
