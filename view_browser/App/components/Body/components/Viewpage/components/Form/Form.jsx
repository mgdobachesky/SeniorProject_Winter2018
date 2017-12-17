// Import required modules
import React from 'react';

// Import requred components
import FormTextInput from './components/FormTextInput';

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

var FormJSX = function() {
  return(
    <div>
      <h2>{this.props.form.formTitle}</h2>
      <form onSubmit={this.handleSubmit}>
        <FormTextInputList
          formTextInputs={this.state.formTextInputs}
          record={this.state.record}
          onChange={this.handleChange} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormJSX;
