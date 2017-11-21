// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import HomeJSX from './Home.jsx';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeJSX />
    );
  }
}

export default Home;
