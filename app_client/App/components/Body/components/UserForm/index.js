// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import required components
import UserFormJSX from './UserForm.jsx';
import './userForm.css';

// Import required services
import UserService from '../../../../services/UserService';

class UserForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Service Class Definitions\
    this.manageUserService = new UserService();

    // User Methods
    this.handleCreateUser = this.handleCreateUser.bind(this);
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      user: {
        'username': "",
        'password': ""
      },
      userSuccess: "",
      userError: ""
    }
  }

  handleCreateUser() {
    let requestData = {};
    let newUser = this.state.user;
    requestData.username = newUser.username;
    requestData.password = newUser.password;
    this.manageUserService.createUser(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "user");
      this.handleSetGlobalState(true, "loggedIn");
    },
    (error) => {
      this.setState({
        userSuccess: "",
        userError: error.response.data
      });
    });
  }

  handleUpdateUser() {
    let requestData = {};
    let updatedUser = this.state.user;
    requestData.username = updatedUser.username;
    requestData.password = updatedUser.password;
    this.manageUserService.updateUser(requestData)
    .then((results) => {
      this.handleSetGlobalState(results.data, "user");
      this.setState({
        userError: "",
        userSuccess: "User updated successfully!"
      });
    },
    (error) => {
      this.setState({
        userError: error.response.data,
        userSuccess: ""
      });
    });
  }

  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeUser = this.state.user;
    changeUser[name] = value;
    this.setState({
      'user': changeUser
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.action === "create") {
      this.handleCreateUser();
    } else if(this.props.action === "update") {
      this.handleUpdateUser();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({
        user: nextProps.user,
        userSuccess: "",
        userError: ""
      });
    }
  }

  componentDidMount() {
    if(this.props.user) {
      this.setState({
        user: this.props.user,
        userSuccess: "",
        userError: ""
      });
    }
  }

  render() {
    if(this.props.loggedIn) {
      return(<Redirect to="/" />);
    } else {
      return (UserFormJSX.call(this));
    }
  }
}

export default UserForm;
