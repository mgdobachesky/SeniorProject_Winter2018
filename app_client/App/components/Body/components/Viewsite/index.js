// Import required modules
import React from 'react';
import { Redirect } from 'react-router-dom';

// Import requred components
import ViewsiteJSX from './Viewsite.jsx';
import './viewsite.css';

// Import required services
import ViewsiteService from '../../../../services/ViewsiteService';
import UserDatabaseService from './services/UserDatabaseService';

class Viewsite extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageViewsiteService = new ViewsiteService();
    this.manageUserDatabaseService = new UserDatabaseService();

    // Other Methods
    this.handleSetGlobalState = this.handleSetGlobalState.bind(this);

    // Set initial state
    this.state = {
      viewsite: {}
    };
  }

  handleSetGlobalState(newStateData, toSet) {
    this.setState({
      [toSet]: newStateData
    });
  }

  componentDidMount() {
    // Load initial Viewsite
    let requestData = {};
    requestData.viewsiteName = this.props.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsite: results.data
      });
    },
    (error) => {
      console.log(error.response.data);
    });
    $("#createViewpage").hide(false);
  }

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    requestData.viewsiteName = nextProps.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData)
    .then((results) => {
      this.setState({
        viewsite: results.data
      });
    },
    (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    if(this.props.loggedIn) {
      return(ViewsiteJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Viewsite;
