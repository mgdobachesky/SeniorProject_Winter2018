// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewsiteForm from './ViewsiteForm';
import UserForm from './UserForm';

// Import required services
import ViewsiteService from '../services/ViewsiteService';

// Create list of Viewsites a user owns
function ViewsiteList(props) {
  if(props.viewsites) {
    return props.viewsites.map((viewsite, index) => {
      const viewsiteId = viewsite._id;
      const viewsiteName = viewsite.viewsiteName;
      const loginEnabled = viewsite.loginEnabled;
      const loginEnabledMessage = viewsite.loginEnabled ? "Yes" : "No";
      let editClick = {viewsiteId: viewsiteId, viewsiteName: viewsiteName, loginEnabled: loginEnabled};
      let deleteClick = {viewsiteId: viewsiteId};
      return (
        <div key={viewsiteId} className="card">
          <div className="card-body">
            <h4 className="card-title">{viewsiteName}</h4>
            <p className="card-text">Login Enabled: {loginEnabledMessage}</p>
            <a className="card-link" href="javascript:;" data-toggle="modal" data-target="#viewsiteEdit" onClick={() => props.onEditViewsite(editClick)}>Edit</a>
            <a className="card-link" href="javascript:;" onClick={() => props.onDeleteViewsite(deleteClick)}>Delete</a>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.handleCreateViewsite = this.handleCreateViewsite.bind(this);
    this.handleEditViewsite = this.handleEditViewsite.bind(this);
    this.handleDeleteViewsite = this.handleDeleteViewsite.bind(this);
  }

  handleCreateViewsite(event) {
    let requestData = {};
    requestData.userId = this.props.user._id;
    requestData.viewsiteName = event.viewsiteName.value;
    requestData.loginEnabled = event.loginEnabled.checked;
    this.manageViewsiteService.createViewsite(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
    this.props.updateViewsiteState();
  }

  handleEditViewsite(event) {
    console.log(event);
  }

  handleDeleteViewsite(event) {
    let requestData = {};
    requestData.viewsiteId = event.viewsiteId;
    this.manageViewsiteService.deleteViewsite(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
    this.props.updateViewsiteState();
  }

  componentDidMount() {
    $("#viewsiteForm").hide();
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-md-auto">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="true">Account</a>
              <a className="nav-link" id="v-pills-viewsites-tab" data-toggle="pill" href="#v-pills-viewsites" role="tab" aria-controls="v-pills-viewsites" aria-selected="false">Viewsites</a>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">

                <UserForm
                  description="Update User"
                  user={this.props.user}
                  onInputChange={this.props.onInputChange}
                  onSubmit={this.props.onUpdateUser} />

              </div>
              <div className="tab-pane fade" id="v-pills-viewsites" role="tabpanel" aria-labelledby="v-pills-viewsites-tab">
                <button type="button" className="btn btn-link" onClick={() => $( "#viewsiteForm" ).toggle("fast")}>+ New Viewsite</button>
                <div id="viewsiteForm" className="card">
                  <div className="card-body">

                    <ViewsiteForm
                      onCreateViewsite={this.handleCreateViewsite}
                      title="Create Viewsite" />

                  </div>
                </div>
                <div className="card-deck">
                  <ViewsiteList viewsites={this.props.viewsites} onEditViewsite={this.handleEditViewsite} onDeleteViewsite={this.handleDeleteViewsite} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
