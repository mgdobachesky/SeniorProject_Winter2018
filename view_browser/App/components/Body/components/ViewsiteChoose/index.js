// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import ViewsiteChooseJSX from './ViewsiteChoose.jsx';
import './viewsiteChoose.css';

class ViewsiteChoose extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    //Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      viewsiteName: ""
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onRequestViewsite(this.state.viewsiteName);
  }

  render() {
    if(this.props.viewsite) {
      return(<Redirect to={'/viewsites/' + this.props.viewsite.viewsiteName} />);
    } else {
      return(ViewsiteChooseJSX.call(this));
    }
  }
}

export default ViewsiteChoose;
