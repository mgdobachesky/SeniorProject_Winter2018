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
      viewsiteRequestError: "",
      userTables: []
    };
  }

  /*
   * Method that loads the requested Viewsite
   */
  handleRequestViewsite(viewsiteName) {
    // Continue if a Viewsite Name exists
    if(viewsiteName) {
      // Set HTTP call request data
      let requestData = {};
      requestData.viewsiteName = viewsiteName;
      this.manageViewsiteService.readOneViewsite(requestData)
      .then((results) => {
        // Collect an array of Forms whose data will be used to enrich associated User Tables
        let userTables = [];
        if(results.data.viewpages) {
          for(const viewpage of results.data.viewpages) {
            if(viewpage.elements) {
              for(const element of viewpage.elements) {
                if(element.kind === "form") {
                  userTables.push(element);
                }
              }
            }
          }
        }
        // Set state to reflect API call results
        this.setState({
          viewsite: results.data,
          userTables: userTables,
          viewsiteRequestError: ""
        }, () => this.handleRequestUserDatabase(results.data._id));
      },
      (error) => {
        // Handle errors
        this.setState({
          viewsite: "",
          userDatabase: "",
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      // Set state to be blank if no Viewsite Name exists
      this.setState({
        viewsite: "",
        userDatabase: "",
        viewsiteRequestError: "No viewsite specified!"
      });
    }
  }

  /*
   * Method that loads the requested Viewsite's associated User Database
   *
   * NOTE: User Databases share an ID with Viewsites
   */
  handleRequestUserDatabase(viewsiteId) {
    // Only continue if a Viewsite ID exists
    if(viewsiteId) {
      // Set HTTP call request data
      let requestData = {};
      requestData.viewsiteId = viewsiteId;
      this.manageUserDatabaseService.readOneUserDatabase(requestData)
      .then((results) => {
        // Set state to reflect the API call results
        this.setState({
          userDatabase: results.data,
          viewsiteRequestError: ""
        });
      },
      (error) => {
        // Handle errors
        this.setState({
          userDatabase: "",
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      // If no Viewsite ID exists, set state to be blank
      this.setState({
        userDatabase: "",
        viewsiteRequestError: "No user database specified!"
      });
    }
  }

  /*
   * React component lifecycle method that is run before this component mounts
   * Used for loading a requested Viewsite automatically
   */
  componentWillMount() {
    if(this.props.viewsiteName) {
      this.handleRequestViewsite(this.props.viewsiteName);
    }
  }

  /*
   * Render the main Application
   */
  render() {
    return(AppJSX.call(this));
  }
}

// Export the main Application
export default App;
