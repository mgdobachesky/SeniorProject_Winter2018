// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import required services
import ViewsiteService from '../services/ViewsiteService';

class Viewsite extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.state = {viewsite: {}, viewpages: []};
  }

  componentDidMount(nextProps, nextState) {
    // Load initial Viewsite
    let requestData = {};
    let currentViewsite = this.state.viewsite;
    requestData.viewsiteName = this.props.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData).then((results) => {
      currentViewsite = results.data;
      this.setState({viewsite: currentViewsite});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    let currentViewsite = this.state.viewsite;
    requestData.viewsiteName = nextProps.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData).then((results) => {
      currentViewsite = results.data;
      this.setState({viewsite: currentViewsite});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.match.params.viewsiteName}</h1>
        <div className="row">
          <div className="col-md-auto">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-addViewpage-tab" data-toggle="pill" href="#v-pills-addViewpage" role="tab" aria-controls="v-pills-addViewpage" aria-selected="true">+ Add Viewpage</a>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-addViewpage" role="tabpanel" aria-labelledby="v-pills-addViewpage-tab">
                TODO: Add Viewpages
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewsite;
