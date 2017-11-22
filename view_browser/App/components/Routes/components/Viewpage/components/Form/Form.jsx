// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import FormTextInput from './components/FormTextInput';

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

var FormJSX = function() {
  return(
    <div>
      <h2>{this.props.form.formTitle}</h2>
      <form onSubmit={this.handleSubmit}>
        <FormTextInputList
          formTextInputs={this.state.formTextInputs}
          onChange={this.handleChange} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormJSX;
