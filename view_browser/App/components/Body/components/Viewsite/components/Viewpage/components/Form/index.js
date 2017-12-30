// Import required modules
import React from 'react';

// Import required components
import FormJSX from './Form.jsx';
import './form.css';

// Import required services
import UserRecordService from './services/UserRecordService';

class Form extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageUserRecordService = new UserRecordService();

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);
    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      formInputs: [],
      record: {}
    }
  }

  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  handleChange(event, toChange) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeProp = this.state[toChange];
    changeProp[name] = value;
    this.setState({
      [toChange]: changeProp
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let requestData = {};
    requestData.viewsiteId = this.props.userDatabase._id;
    requestData.elementId = this.props.element._id;
    requestData.record = this.state.record;
    this.manageUserRecordService.createUserRecord(requestData)
    .then((results) => {
      for(let key in requestData.record) {
        requestData.record[key] = "";
      }
      this.setState({
        record: requestData.record
      });
      this.handleRequestUserDatabase(this.props.userDatabase._id);
    },
    (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount(nextProps) {
    if(this.props.element.formInputs && this.props.element.formInputs.length >= 1) {
      this.setState({
        formInputs: this.props.element.formInputs
      });
    }
  }

  render() {
    return(FormJSX.call(this));
  }
}

export default Form;
