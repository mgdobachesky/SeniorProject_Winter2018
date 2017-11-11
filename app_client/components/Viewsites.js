// Navbar Component
import React, { Component } from 'react';

// Import required services
import ViewsiteService from '../services/ViewsiteService';

class Viewsites extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.handleNewViewsite = this.handleNewViewsite.bind(this);
    this.getAllViewsites = this.getAllViewsites.bind(this);
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
  }

  getAllViewsites() {
    let requestData = {};
    requestData.userId = this.props.user.userId;
    this.manageViewsiteService.readAllViewsites(requestData).then((results) => {
      console.log(results);
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    this.getAllViewsites();
    return (
      <div className="container">
        <h1>Viewsites</h1>
        <div className="row">
          <div className="col-md-auto">
            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#exampleModal">New Viewsite</button>
          </div>
          <div className="col-md-auto">

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

export default Viewsites;
