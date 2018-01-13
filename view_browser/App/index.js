// Import required modules
import React from 'react';

// Import required components
import AppJSX from './App.jsx';
import './app.css';

// Import required services
import ViewsiteService from './services/ViewsiteService';
import UserTableService from './services/UserTableService';

// Create main App
class App extends React.Component {
  constructor(props) {
    // Call parent constructors
    super(props);

    // Initialize service objects
    this.manageViewsiteService = new ViewsiteService();
    this.manageUserTableService = new UserTableService();

    // Viewsite Methods
    this.handleRequestViewsite = this.handleRequestViewsite.bind(this);

    // User Table Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);
    this.handleUpdateUserTable = this.handleUpdateUserTable.bind(this);

    // Other Methods
    this.handleSetViewsiteTheme = this.handleSetViewsiteTheme.bind(this);

    // Set initial state
    this.state = {
      viewsite: "",
      userDatabase: "",
      viewsiteRequestError: "",
      dataViews: [],
      userForms: []
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
        let dataViews = [];
        let userForms = [];
        if(results.data.viewpages) {
          for(const viewpage of results.data.viewpages) {
            if(viewpage.elements) {
              for(const element of viewpage.elements) {
                if(element.kind === "form") {
                  userForms.push(element);
                } else if(element.kind === "dataView") {
                  dataViews.push(element);
                }
              }
            }
          }
        }
        // Set the Viewsite's Bootswatch theme
        this.handleSetViewsiteTheme(results.data.viewsiteTheme);
        // Set state to reflect API call results
        this.setState({
          viewsite: results.data,
          dataViews: dataViews,
          userForms: userForms,
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
   * NOTE: User Tables share an ID with Forms
   */
  handleRequestUserDatabase(viewsiteId) {
    // Only continue if a Viewsite ID exists
    if(viewsiteId) {
      // Set HTTP call request data
      let requestData = {};
      requestData.viewsiteId = viewsiteId;
      requestData.elements = this.state.dataViews;
      this.manageUserTableService.readAllUserTables(requestData)
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
        viewsiteRequestError: "No User Database specified!"
      });
    }
  }

  /*
   * Method that reloads a User Table that has changed
   *
   * NOTE: User Tables share an ID with Forms
   */
  handleUpdateUserTable(updatedTable) {
    // Only continue if a User Table exists
    if(updatedTable._id) {
      let userDatabase = this.state.userDatabase;
      // Find updated table
      for(let i in userDatabase) {
        if(userDatabase[i]._id == updatedTable._id) {
          userDatabase[i] = updatedTable;
        }
      }
      // Set state with new updated table
      this.setState({userDatabase: userDatabase});
    }
  }

  /*
   * Method used for loading a requested Viewsite's theme
   */
  handleSetViewsiteTheme(viewsiteTheme) {
    if(viewsiteTheme) {
      // Choose the Bootswatch theme
      var bootswatchTheme = "";
      if(viewsiteTheme != "default") {
        bootswatchTheme = "https://bootswatch.com/4/" + viewsiteTheme + "/bootstrap.min.css";
      } else if(viewsiteTheme == "default") {
        bootswatchTheme = "https://bootswatch.com/_vendor/bootstrap/dist/css/bootstrap.min.css";
      }
      // Set the Bootstrap CSS
      var file = document.createElement("link");
      file.setAttribute("rel", "stylesheet");
      file.setAttribute("type", "text/css");
      file.setAttribute("href", bootswatchTheme);
      document.head.appendChild(file);
    }
  }

  /*
   * React component lifecycle method that is run before this component mounts
   * Used for loading a requested Viewsite automatically
   */
  componentWillMount() {
    // Automatically load requested viewsite
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
