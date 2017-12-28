// Import required modules
import React from 'react';

// Import requred components
import ViewpageForm from './components/ViewpageForm';
import Viewpage from './components/Viewpage';

// Clear all forms
function clearAllForms() {
  $(".createText").hide(false);
  $(".createForm").hide(false);
  $(".createDataView").hide(false);
}

// Create list of Viewpages a Viewsite owns
function ViewpageList(props) {
  if(props.viewpages && props.viewpages.length >= 1) {
    return props.viewpages.map((viewpage, index) => {
      return (
        <div key={viewpage._id} className="card border-primary mb-3">
          <div className="card-body">
            <ViewpageForm
            description="Update Viewpage"
            action="update"
            viewsiteId={props.viewsiteId}
            viewpage={viewpage}
            viewpageName={viewpage.viewpageName}
            onSetGlobalState={props.onSetGlobalState} />
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

// Create list of tabs for Viewpages a Viewsite owns
function ViewpageTabs(props) {
  if(props.viewpages && props.viewpages.length >= 1) {
    return props.viewpages.map((viewpage, index) => {
      return (
        <li key={viewpage._id + "-tab"} className="nav-item">
          <a
          className="nav-link"
          id={viewpage._id + "-tab"}
          data-toggle="tab"
          href={"#" + viewpage._id}
          role="tab"
          aria-controls={viewpage._id}
          aria-selected="false"
          onClick={() => {clearAllForms.call(this);}}>
            {viewpage.viewpageName}
          </a>
        </li>
      );
    });
  } else {
    return null;
  }
}

// Create list of Viewpages content a Viewsite owns
function ViewpageContent(props) {
  if(props.viewpages && props.viewpages.length >= 1) {
    return props.viewpages.map((viewpage, index) => {
      return (
        <div
        key={viewpage._id}
        className="tab-pane fade"
        id={viewpage._id}
        role="tabpanel"
        aria-labelledby={viewpage._id + "-tab"}>
        {/*
          <Viewpage
          viewsiteId={props.viewsiteId}
          viewpage={viewpage}
          onSetGlobalState={props.onSetGlobalState} />
          */}
        </div>
      );
    });
  } else {
    return null;
  }
}

var ViewsiteJSX = function() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 offset-1">
          <h1>
            {this.state.viewsite.viewsiteName}
          </h1>
        </div>
      </div>

      <div className="row">
        <div className="col-10 offset-1">
          <ul className="nav nav-tabs" id="viewsite-tabs" role="tablist">
            <li className="nav-item">
              <a
              className="nav-link active"
              id="manage-viewpages-tab"
              data-toggle="tab"
              href="#manage-viewpages"
              role="tab"
              aria-controls="manage-viewpages"
              aria-selected="true">
                Manage Viewpages
              </a>
            </li>

            <ViewpageTabs
            viewpages={this.state.viewsite.viewpages} />
          </ul>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-12">
          <div className="tab-content" id="manage-viewsites-tabContent">
            <div
            className="tab-pane fade show active"
            id="manage-viewpages"
            role="tabpanel"
            aria-labelledby="manage-viewpages-tab">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-auto">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <button
                      type="button"
                      className="btn btn-link nav-link"
                      onClick={() => $("#createViewpage").toggle("medium")}>
                        + New Viewpage
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <div id="createViewpage" className="card mb-3">
                    <div className="card-body">
                      <ViewpageForm
                      description="Create Viewpage"
                      action="create"
                      viewsiteId={this.state.viewsite._id}
                      onSetGlobalState={this.handleSetGlobalState} />
                    </div>
                  </div>
                  <ViewpageList
                  viewsiteId={this.state.viewsite._id}
                  viewpages={this.state.viewsite.viewpages}
                  onSetGlobalState={this.handleSetGlobalState} />
                </div>
                <div className="col-1"></div>
              </div>
            </div>

            <ViewpageContent
            viewsiteId={this.state.viewsite._id}
            viewpages={this.state.viewsite.viewpages}
            onSetGlobalState={this.handleSetGlobalState} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewsiteJSX;
