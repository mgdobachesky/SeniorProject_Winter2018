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
    this.manageViewsiteService = new ViewsiteService();
    this.manageViewpageService = new ViewpageService();
    this.state = {
      viewsite: {},
      viewpages: []
    };
  }

  handleReadAllViewpages() {
    let requestData = {};
    requestData.viewsiteId = this.state.viewsite._id;
    this.manageViewpageService.readAllViewpages(requestData).then((results) => {
      this.setState({viewpages: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentWillMount() {
    let requestData = {};
    requestData.viewsiteName = this.props.viewsiteName;
    this.manageViewsiteService.readOneViewsiteByName(requestData).then((results) => {
      this.setState({viewsite: results.data}, () => this.handleReadAllViewpages());
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    return(AppJSX.call(this));
  }
}
export default App;
