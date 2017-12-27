// Import required modules
import React from 'react';

// Import requred components
import ViewsiteForm from './components/ViewsiteForm';
import UserForm from '../UserForm';

// Create list of Viewsites a user owns
function ViewsiteList(props) {
  if(props.viewsites && props.viewsites.length >= 1) {
    return props.viewsites.map((viewsite, index) => {
      return (
        <div key={viewsite._id} className="card border-primary mb-3">
          <div className="card-body">
            <ViewsiteForm
            description="Update Viewsite"
            action={props.action}
            viewsite={viewsite}
            viewsiteName={viewsite.viewsiteName}
            onSetGlobalState={props.onSetGlobalState} />
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
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
              onClick={() => $("#createViewsite").toggle("medium")}>
                + New Viewsite
              </button>
              <div id="createViewsite" className="card mb-3">
                <div className="card-body">
                  <ViewsiteForm
                  description="Create Viewsite"
                  action="create"
                  onSetGlobalState={this.handleSetGlobalState} />
                </div>
              </div>

              <ViewsiteList
              viewsites={this.props.viewsites}
              action="update"
              onSetGlobalState={this.handleSetGlobalState} />
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
                  action="update"
                  user={this.props.user}
                  onSetGlobalState={this.handleSetGlobalState} />
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
