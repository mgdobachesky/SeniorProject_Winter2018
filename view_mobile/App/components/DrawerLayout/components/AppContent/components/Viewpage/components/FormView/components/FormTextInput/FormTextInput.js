// Import required modules
import React from 'react';
import {
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  H1,
  H2,
  H3
} from 'native-base';

// Import requred components
import styles from './styles.js';

var FormTextInputFormJSX = function() {
  return (
    <Item>
      <Label>
        {this.props.formTextInput.formTextInputLabel}
      </Label>

      <Input
      value={this.props.formTextInputValue}
      onChangeText={this.handleChange} />
    </Item>
  );
}

export default FormTextInputFormJSX;
