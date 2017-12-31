// Import required modules
import React from 'react';

// Import requred components
import DrawerLayoutJSX from './DrawerLayout.js';

// Import required services
import ViewsiteService from './services/ViewsiteService';
import UserDatabaseService from './services/UserDatabaseService';

class DrawerLayout extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // Initialize service objects
    this.manageViewsiteService = new ViewsiteService();
    this.manageUserDatabaseService = new UserDatabaseService();

    // Viewsite Methods
    this.handleRequestViewsite = this.handleRequestViewsite.bind(this);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);

    // Other Methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // Set initial state
    this.state = {
      viewsiteName: "",
      viewsite: {},
      userDatabase: {},
      viewsiteRequestError: "",
      userTables: []
    };
  }

  /*
   * Method that loads the requested Viewsite
   */
  handleRequestViewsite(viewsiteName) {
    if(viewsiteName) {
      let requestData = {};
      requestData.viewsiteName = viewsiteName;
      this.manageViewsiteService.readOneViewsite(requestData)
      .then((results) => {
        // Collect an array of Forms to enrich associated User Tables
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
        this.setState({
          viewsite: results.data,
          viewsiteRequestError: "",
          userTables: userTables
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

  /*
   * Method that loads the requested Viewsite's associated User Database
   */
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

  /*
   * Update state to reflect what a user types
   */
  handleChange(viewsiteName) {
    this.setState({
      viewsiteName: viewsiteName
    });
  }

  /*
   * Method used to control what happens when a form is submitted
   */
  handleSubmit() {
    if(this.state.viewsiteName) {
      this.handleRequestViewsite(this.state.viewsiteName);
    }
  }

  /*
   * Method used to control how the Drawer is closed
   */
  closeDrawer = () => {
    this.drawer._root.close()
  };

  /*
   * Method used to control how the Drawer is opened
   */
  openDrawer = () => {
    this.drawer._root.open()
  };

  /*
   * Render the Drawer Layout containing the main Application content
   */
  render() {
    return (DrawerLayoutJSX.call(this));
  }
}

// Export the DrawerLayout
export default DrawerLayout;
