// Import required modules
import React from 'react';
import {
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  H1,
  H2,
  H3
} from 'native-base';

// Import requred components
import FormTextInput from './components/FormTextInput';
import styles from './styles.js';

// Create list of FormTextInputs a Form owns
function FormTextInputList(props) {
  if(props.formTextInputs) {
    return props.formTextInputs.map((formTextInput, index) => {
      let formTextInputValue = props.record[formTextInput._id];
      return (
        <FormTextInput
        key={formTextInput._id}
        formTextInput={formTextInput}
        formTextInputValue={formTextInputValue}
        onChange={props.onChange} />
      );
    });
  } else {
    return null;
  }
}

var FormViewJSX = function() {
  return(
    <Content>
      <H2>
        {this.props.form.formTitle}
      </H2>

      <Form>
        <FormTextInputList
        formTextInputs={this.state.formTextInputs}
        record={this.state.record}
        onChange={this.handleChange} />

        <Button
        block
        onPress={this.handleSubmit}>
          <Text>
            Submit
          </Text>
        </Button>
      </Form>
    </Content>
  );
}

export default FormViewJSX;
