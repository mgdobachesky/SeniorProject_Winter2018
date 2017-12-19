// Import required modules
import React from 'react';
import { Content, Text } from 'native-base';

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
