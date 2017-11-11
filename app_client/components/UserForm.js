// Navbar Component
import React, { Component } from 'react';

// Import requred components
import UserService from '../services/UserService';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.manageUserService = new UserService();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserSignup = this.handleUserSignup.bind(this);
    this.state = {feedback: "", success: true};
  }

  handleSubmit(event) {
    event.preventDefault();
    let action = this.props.title;
    let contents = {};
    if(action = "Sign Up") {
      contents = this.handleUserSignup(event.target);
    }
  }

  handleUserSignup(event) {
    let data = {};
    data.username = event.username.value;
    data.password = event.password.value;
    this.manageUserService.createUser(data).then((results) => {
      this.setState({feedback: results.data, success: true});
    }, (error) => {
      this.setState({feedback: error.response.data, success: false});
    });
  }

  render() {
    const feedback = this.state.feedback;
    const success = this.state.success;
    let signupFeedback = null;
    if(feedback) {
      if(success) {
        signupFeedback = <div className="alert alert-success" role="alert">{feedback}</div>;
      } else {
        signupFeedback = <div className="alert alert-danger" role="alert">{feedback}</div>;
      }
    }
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        {signupFeedback}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
          </div>
          <button type="submit" className="btn btn-primary">{this.props.title}</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
