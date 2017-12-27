// Import required modules
import React from 'react';

// Import requred components
import ViewsiteForm from './components/ViewsiteForm';
import UserForm from '../UserForm';

// Create list of Viewsites a user owns
function ViewsiteList(props) {
  if(props.viewsites) {
    return props.viewsites.map((viewsite, index) => {
      const _id = viewsite._id;
      const userId = viewsite.userId;
      const viewsiteName = viewsite.viewsiteName;
      const loginEnabled = viewsite.loginEnabled;
      const loginEnabledMessage = loginEnabled ? "Yes" : "No";
      const viewsiteLink = "/viewsites/" + viewsite.viewsiteName;
      let editClick = {
        _id: _id,
        userId: userId,
        viewsiteName: viewsiteName,
        loginEnabled: loginEnabled
      };
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">
              Viewsite: <a href={viewsiteLink} className="card-link">
                {viewsiteName}
              </a>
            </h4>
            <p className="card-text">
              Login Enabled: {loginEnabledMessage}
            </p>
          </div>
          <div className="card-footer">
            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onEditViewsite(editClick)}>
              Edit
            </a>

            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onDeleteViewsite(deleteClick)}>
              Delete
            </a>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

var createViewsite = function() {
  $( "#createViewsite" ).toggle("medium");
  $( "#updateViewsite" ).hide(false);
  this.handleClearViewsiteState();
}

var DashboardJSX = function() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1 offset-1">
          <h1>
            Dashboard
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-auto">
          <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical">
            <a
            className="nav-link active"
            id="v-pills-viewsites-tab"
            data-toggle="pill"
            href="#v-pills-viewsites"
            role="tab"
            aria-controls="v-pills-viewsites"
            aria-selected="true">
              Viewsites
            </a>

            <a
            className="nav-link"
            id="v-pills-account-tab"
            data-toggle="pill"
            href="#v-pills-account"
            role="tab"
            aria-controls="v-pills-account"
            aria-selected="false">
              Account
            </a>
          </div>
        </div>
        <div className="col">
          <div className="tab-content" id="v-pills-tabContent">
            <div
            className="tab-pane fade show active"
            id="v-pills-viewsites"
            role="tabpanel"
            aria-labelledby="v-pills-viewsites-tab">
              <button
              type="button"
              className="btn btn-link"
              onClick={() => {createViewsite.call(this);}}>
                + New Viewsite
              </button>
              <div id="createViewsite" className="card mb-3">
                <div className="card-body">
                  <ViewsiteForm
                  description="Create Viewsite"
                  viewsite={this.props.viewsite}
                  viewsiteError={this.props.viewsiteError}
                  onChange={this.handleChange}
                  onSubmit={this.handleCreateViewsite} />
                </div>
              </div>
              <div id="updateViewsite" className="card mb-3">
                <div className="card-body">
                  <ViewsiteForm
                  description="Update Viewsite"
                  viewsite={this.props.viewsite}
                  viewsiteError={this.props.viewsiteError}
                  onChange={this.handleChange}
                  onSubmit={this.handleUpdateViewsite} />
                </div>
              </div>

              <ViewsiteList
              viewsites={this.props.viewsites}
              onEditViewsite={this.handleEditViewsite}
              onDeleteViewsite={this.handleDeleteViewsite} />
            </div>
            <div
            className="tab-pane fade"
            id="v-pills-account"
            role="tabpanel"
            aria-labelledby="v-pills-account-tab">
              <div className="card mb-3">
                <div className="card-body">
                  <UserForm
                  description="Update User"
                  user={this.props.user}
                  userSuccess={this.props.userSuccess}
                  userError={this.props.userError}
                  onChange={this.handleChange}
                  onSubmit={this.handleUpdateUser} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default DashboardJSX;
