// Import required modules
import React from 'react';
import {Redirect} from 'react-router-dom';

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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.errorClass = this.errorClass.bind(this);

        // Set initial state
        this.state = {
            username: "",
            password: "",
            email: "",
            userSuccess: "",
            userError: "",
            confirmPassword: "",
            formErrors: {username: "", password: "", confirmPassword: "", email: ""},
            passwordValid: false,
            confirmPasswordValid: false,
            emailValid: true,
        }
    }

    /*
     * Method that allows new Users to sign-up
     */
    handleCreateUser() {
        // Prepare HTTP API request data
        let requestData = {};
        let newUser = this.state;
        requestData.username = newUser.username;
        requestData.email = newUser.email;
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
        let updatedUser = this.state;
        requestData.username = updatedUser.username;
        requestData.email = updatedUser.email;
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
     * Method that controls what happens after the User form has been submitted
     */
    handleSubmit(event) {
        event.preventDefault();

        // Don't submit if there are invalid entries
        if(!this.state.emailValid
            || !this.state.passwordValid
            || !this.state.confirmPasswordValid) {
            return;
        }

        if (this.props.action === "create") {
            // Create if currently creating a User
            this.handleCreateUser();
        } else if (this.props.action === "update") {
            // Update if currently updating a User
            this.handleUpdateUser();
        }
    }

    handleUserInput(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value.match(password.value);
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' does not match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    /*
     * React component lifecycle method that controls what happens before this
     * component receives any props
     * Used to receive user information so that the form can be filled out
     * when updating an existing user
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            let user = nextProps.user;
            this.setState({
                username: user.username ? user.username : "",
                email: user.email ? user.email : "",
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
        if (this.props.user) {
            let user = this.props.user;
            this.setState({
                username: user.username ? user.username : "",
                email: user.email ? user.email : "",
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
        if (this.props.loggedIn) {
            return (<Redirect to="/"/>);
        } else {
            return (UserFormJSX.call(this));
        }
    }
}

// Export the User Form
export default UserForm;
