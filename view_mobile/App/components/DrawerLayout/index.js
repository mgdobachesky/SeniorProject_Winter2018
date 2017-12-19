// Import required modules
import React from 'react';

// Import requred components
import DrawerLayoutJSX from './DrawerLayout.js';

// Import required services
import ViewsiteService from './services/ViewsiteService';
import ViewpageService from './services/ViewpageService';

class DrawerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.manageViewsiteService = new ViewsiteService();
    this.manageViewpageService = new ViewpageService();
    this.state = {
      viewsiteName: "",
      viewsite: {},
      viewpages: []
    };
  }

  handleReadAllViewpages() {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsite._id;
    this.manageViewpageService.readAllViewpages(requestData)
    .then((results) => {
      this.setState({
        viewpages: results.data
      });
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleChange(text) {
    this.setState({
      viewsiteName: text
    });
  }

  handleSubmit() {
    if(this.state.viewsiteName) {
      let requestData = {};
      requestData.viewsiteName = this.state.viewsiteName;
      this.manageViewsiteService.readOneViewsiteByName(requestData)
      .then((results) => {
        this.setState({
          viewsite: results.data
        }, () => this.handleReadAllViewpages());
      }, (error) => {
        console.log(error.response.data);
      });
    }
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };

  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
    return (DrawerLayoutJSX.call(this));
  }
}

export default DrawerLayout;
