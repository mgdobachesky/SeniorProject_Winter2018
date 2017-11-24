// Import required modules
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Link } from 'react-router-native';

// Import requred components
import styles from './styles.js';

var FormTextInputFormJSX = function() {
  return (
    <View>
      <Text>
        {this.props.formTextInput.formTextInputLabel}
      </Text>
      <TextInput
        onChangeText={this.handleChange} />
    </View>
  );
}

export default FormTextInputFormJSX;
