// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required services
import ViewpageService from '../services/ViewpageService';

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewpageService = new ViewpageService();
    this.state = {viewpage: ""};
  }

  componentDidMount(nextProps, nextState) {
    let currentViewpage = this.props.viewpage;
    this.setState({viewpage: currentViewpage});
  }

  render() {
    const viewpage = this.props.viewpage;

    return (
      <div className="container">
        <h1>{viewpage.viewpageName}</h1>
      </div>
    );
  }
}

export default Viewpage;
