// Import required modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Import requred components
import Navbar from './Navbar';
import UserForm from './UserForm';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId: ""};
  }

  render() {
    return(
      <Router basename="/">
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={UserForm} />
        </div>
      </Router>
    );
  }
}
export default App;
