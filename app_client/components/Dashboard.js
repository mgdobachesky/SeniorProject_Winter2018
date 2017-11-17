// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewsiteForm from './ViewsiteForm';
import UserForm from './UserForm';

// Create list of Viewsites a user owns
function ViewsiteList(props) {
  if(props.viewsites) {
    return props.viewsites.map((viewsite, index) => {
      const _id = viewsite._id;
      const userId = viewsite.userId;
      const viewsiteName = viewsite.viewsiteName;
      const loginEnabled = viewsite.loginEnabled;
      const loginEnabledMessage = loginEnabled ? "Yes" : "No";
      let editClick = {_id: _id, userId: userId, viewsiteName: viewsiteName, loginEnabled: loginEnabled};
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card">
          <div className="card-body">
            <h4 className="card-title">{viewsiteName}</h4>
            <p className="card-text">Login Enabled: {loginEnabledMessage}</p>
            <a className="card-link" href="javascript:;" onClick={() => props.onEditViewsite(editClick)}>Edit</a>
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
  }

  componentDidMount() {
    $("#createViewsite").hide();
    $("#updateViewsite").hide();
  }

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <div className="row">
          <div className="col-md-auto">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-viewsites-tab" data-toggle="pill" href="#v-pills-viewsites" role="tab" aria-controls="v-pills-viewsites" aria-selected="true">Viewsites</a>
              <a className="nav-link" id="v-pills-account-tab" data-toggle="pill" href="#v-pills-account" role="tab" aria-controls="v-pills-account" aria-selected="false">Account</a>
            </div>
          </div>

          <div className="col-md">
            <div className="tab-content" id="v-pills-tabContent">

              <div className="tab-pane fade show active" id="v-pills-viewsites" role="tabpanel" aria-labelledby="v-pills-viewsites-tab">
                <button type="button" className="btn btn-link" onClick={() => $( "#createViewsite" ).toggle("medium")}>+ New Viewsite</button>
                <div id="createViewsite" className="card">
                  <div className="card-body">
                    <ViewsiteForm
                      description="Create Viewsite"
                      viewsite={this.props.viewsite}
                      onInputChange={this.props.onInputChange}
                      onSubmit={this.props.onCreateViewsite} />
                  </div>
                </div>
                <div id="updateViewsite" className="card">
                  <div className="card-body">
                    <ViewsiteForm
                      description="Update Viewsite"
                      viewsite={this.props.viewsite}
                      onInputChange={this.props.onInputChange}
                      onSubmit={this.props.onUpdateViewsite} />
                  </div>
                </div>
                <ViewsiteList
                  viewsites={this.props.viewsites}
                  onEditViewsite={this.props.onEditViewsite}
                  onDeleteViewsite={this.props.onDeleteViewsite} />
              </div>

              <div className="tab-pane fade" id="v-pills-account" role="tabpanel" aria-labelledby="v-pills-account-tab">
                <UserForm
                  description="Update User"
                  user={this.props.user}
                  onInputChange={this.props.onInputChange}
                  onSubmit={this.props.onUpdateUser} />
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
