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
 * Textarea JSX view
 */
var TextareaJSX = function() {
  return (
    <Item>
      <Label>
        {this.props.formInput.textareaLabel}
      </Label>

      <Input
      value={this.props.formInputValue}
      onChangeText={this.handleChange} />
    </Item>
  );
}

// Export Textarea JSX view
export default TextareaJSX;
