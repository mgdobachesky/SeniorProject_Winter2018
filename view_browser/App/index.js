// Import required modules
import React from 'react';

// Import required components
import AppJSX from './App.jsx';
import './app.css';

// Import required services
import ViewsiteService from './services/ViewsiteService';
import UserDatabaseService from './services/UserDatabaseService';

// Create main App
class App extends React.Component {
  constructor(props) {
    // Call parent constructors
    super(props);

    // Initialize service objects
    this.manageViewsiteService = new ViewsiteService();
    this.manageUserDatabaseService = new UserDatabaseService();

    // Viewsite Methods
    this.handleRequestViewsite = this.handleRequestViewsite.bind(this);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);

    // Set initial state
    this.state = {
      viewsite: "",
      userDatabase: "",
      viewsiteRequestError: ""
    };
  }

  handleRequestViewsite(viewsiteName) {
    if(viewsiteName) {
      let requestData = {};
      requestData.viewsiteName = viewsiteName;
      this.manageViewsiteService.readOneViewsite(requestData)
      .then((results) => {
        this.setState({
          viewsite: results.data,
          viewsiteRequestError: ""
        }, () => this.handleRequestUserDatabase(results.data._id));
      },
      (error) => {
        this.setState({
          viewsite: "",
          userDatabase: "",
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      this.setState({
        viewsite: "",
        userDatabase: "",
        viewsiteRequestError: "No viewsite specified!"
      });
    }
  }

  handleRequestUserDatabase(viewsiteId) {
    if(viewsiteId) {
      let requestData = {};
      requestData.viewsiteId = viewsiteId;
      this.manageUserDatabaseService.readOneUserDatabase(requestData)
      .then((results) => {
        this.setState({
          userDatabase: results.data,
          viewsiteRequestError: ""
        });
      },
      (error) => {
        this.setState({
          userDatabase: "",
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      this.setState({
        userDatabase: "",
        viewsiteRequestError: "No user database specified!"
      });
    }
  }

  componentWillMount() {
    if(this.props.viewsiteName) {
      this.handleRequestViewsite(this.props.viewsiteName);
    }
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
