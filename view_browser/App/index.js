// Import required modules
import React from 'react';

// Import required components
import AppJSX from './App.jsx';
import './app.css';

// Import required services
import ViewsiteService from './services/ViewsiteService';
import ViewpageService from './services/ViewpageService';

// Create main App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestViewsite = this.handleRequestViewsite.bind(this);
    this.manageViewsiteService = new ViewsiteService();
    this.manageViewpageService = new ViewpageService();
    this.state = {
      viewsite: null,
      viewpages: [],
      viewsiteRequestError: ""
    };
  }

  handleRequestViewsite(viewsiteName) {
    if(viewsiteName) {
      let requestData = {};
      requestData.viewsiteName = viewsiteName;
      this.manageViewsiteService.readOneViewsiteByName(requestData)
      .then((results) => {
        this.setState({
          viewsite: results.data,
          viewsiteRequestError: ""
        }, () => this.handleReadAllViewpages());
      }, (error) => {
        this.setState({
          viewsite: null,
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      this.setState({
        viewsite: null
      });
    }
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

  componentWillMount() {
    if(this.props.viewsiteName) {
      let requestData = {};
      requestData.viewsiteName = this.props.viewsiteName;
      this.manageViewsiteService.readOneViewsiteByName(requestData)
      .then((results) => {
        this.setState({
          viewsite: results.data,
          viewsiteRequestError: ""
        }, () => this.handleReadAllViewpages());
      }, (error) => {
        this.setState({
          viewsite: null,
          viewsiteRequestError: error.response.data
        });
      });
    } else {
      this.setState({
        viewsite: null
      });
    }
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
