// Import required modules
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

// Import requred components
import FormTextInput from './components/FormTextInput';
import styles from './styles.js';

// Create list of FormTextInputs a Form owns
function FormTextInputList(props) {
  if(props.formTextInputs) {
    return props.formTextInputs.map((formTextInput, index) => {
      return (
        <FormTextInput
          key={formTextInput._id}
          formTextInput={formTextInput}
          onChange={props.onChange} />
      );
    });
  } else {
    return null;
  }
}

var FormViewJSX = function() {
  return(
    <View>
      <Text>{this.props.form.formTitle}</Text>
        <FormTextInputList
          formTextInputs={this.state.formTextInputs}
          onChange={this.handleChange} />
        <TouchableHighlight onPress={this.handleSubmit} underlayColor="white">
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableHighlight>
    </View>
  );
}

export default FormViewJSX;
