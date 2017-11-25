// Import required modules
import React, { Component } from 'react';
import { Content, Button, Text, Form, Item, Input, Label, H1, H2, H3 } from 'native-base';
import { Link } from 'react-router-native';

// Import requred components
import styles from './styles.js';

var FormTextInputFormJSX = function() {
  return (
    <Item>
      <Label>
        {this.props.formTextInput.formTextInputLabel}
      </Label>
      <Input
        onChangeText={this.handleChange} />
    </Item>
  );
}

export default FormTextInputFormJSX;
