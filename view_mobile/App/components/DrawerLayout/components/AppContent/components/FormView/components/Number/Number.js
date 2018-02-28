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

/*
 * Number JSX view
 */
var NumberJSX = function() {
  return (
    <Item>
      <Label>
        {this.props.formInput.numberLabel}
      </Label>

      <Input
      value={this.props.formInputValue}
      onChangeText={this.handleChange} />
    </Item>
  );
}

// Export Number JSX view
export default NumberJSX;
