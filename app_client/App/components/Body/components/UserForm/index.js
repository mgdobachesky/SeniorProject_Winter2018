// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import required components
import UserFormJSX from './UserForm.jsx';
import './userForm.scss';

// Import required services
import UserService from '../../../../services/UserService';

class UserForm extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Service Class Definitions
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

  /*
   * Method that allows new Users to sign-up
   */
  handleCreateUser() {
    // Prepare HTTP API request data
    let requestData = {};
    let newUser = this.state.user;
    requestData.username = newUser.username;
    requestData.password = newUser.password;
    // Send request to create User
    this.manageUserService.createUser(requestData)
    .then((results) => {
      // Afterwards, update Global User state
      this.handleSetGlobalState(results.data, "user");
      // then update Global Logged In boolean
      this.handleSetGlobalState(true, "loggedIn");
    },
    (error) => {
      // Handle errors
      this.setState({
        userSuccess: "",
        userError: error.response.data
      });
    });
  }

  /*
   * Method that updates an existing User
   */
  handleUpdateUser() {
    // Set HTTP API request data
    let requestData = {};
    let updatedUser = this.state.user;
    requestData.username = updatedUser.username;
    requestData.password = updatedUser.password;
    // Send request out to API to update User
    this.manageUserService.updateUser(requestData)
    .then((results) => {
      // Afterwards, update global User state to reflect changes
      this.handleSetGlobalState(results.data, "user");
      // Then set local state to give feedback
      this.setState({
        userError: "",
        userSuccess: "User updated successfully!"
      });
    },
    (error) => {
      // Handle errors
      this.setState({
        userError: error.response.data,
        userSuccess: ""
      });
    });
  }

  /*
   * Method that sets the main Applications state
   * Passed down from the main Application
   */
  handleSetGlobalState(newStateData, toSet) {
    this.props.onSetGlobalState(newStateData, toSet);
  }

  /*
   * Method that keeps local state consistent with what the user types
   */
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

  /*
   * Method that controls what happens after the User form has been submitted
   */
  handleSubmit(event) {
    event.preventDefault();
    if(this.props.action === "create") {
      // Create if currently creating a User
      this.handleCreateUser();
    } else if(this.props.action === "update") {
      // Update if currently updating a User
      this.handleUpdateUser();
    }
  }

  /*
   * React component lifecycle method that controls what happens before this
   * component receives any props
   * Used to receive user information so that the form can be filled out
   * when updating an existing user
   */
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({
        user: nextProps.user,
        userSuccess: "",
        userError: ""
      });
    }
  }

  /*
   * React component lifecycle method that controls what happend before
   * the component mounts
   * Used to receive initial user information so that the form can be filled out
   * when updating an existing user
   */
  componentDidMount() {
    if(this.props.user) {
      this.setState({
        user: this.props.user,
        userSuccess: "",
        userError: ""
      });
    }
  }

  /*
   * Render the User Form
   * Only if the user is not logged in
   */
  render() {
    if(this.props.loggedIn) {
      return(<Redirect to="/" />);
    } else {
      return (UserFormJSX.call(this));
    }
  }
}

// Export the User Form
export default UserForm;
