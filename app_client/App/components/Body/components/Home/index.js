// Import required modules
import React from 'react';

// Import requred components
import HomeJSX from './Home.jsx';
import './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(HomeJSX.call(this));
  }
}

export default Home;
