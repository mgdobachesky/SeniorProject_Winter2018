// Navbar Component
import React, { Component } from 'react';

// Import required services
import ViewsiteService from '../services/ViewsiteService';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.handleNewViewsite = this.handleNewViewsite.bind(this);
  }

  handleNewViewsite(event) {
    event.preventDefault();
    event = event.target;
    let requestData = {};
    requestData.userId = this.props.user.userId;
    requestData.viewsiteName = event.viewsiteName.value;
    requestData.loginEnabled = event.loginEnabled.checked;
    this.manageViewsiteService.createViewsite(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
    $('#exampleModal').modal('hide');
    this.props.updateViewsites();
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
                TODO: Edit account Details
              </div>
              <div className="tab-pane fade" id="v-pills-viewsites" role="tabpanel" aria-labelledby="v-pills-viewsites-tab">
                <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal">New Viewsite</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Viewsite</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleNewViewsite}>
                  <div className="form-group">
                    <label htmlFor="viewsiteName">Viewsite Name</label>
                    <input type="text" className="form-control" id="viewsiteName" placeholder="Enter Viewsite Name" />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" id="loginEnabled" value="loginEnabled" />
                        Login Enabled
                    </label>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save Viewsite</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;
