// Import required modules
import React from 'react';

// Import requred components
import ViewpageForm from './components/ViewpageForm';
import Viewpage from './components/Viewpage';

// Create list of Viewpages a Viewsite owns
function ViewpageList(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      const _id = viewpage._id;
      const viewsiteId = viewpage.viewsiteId;
      const viewpageName = viewpage.viewpageName;
      const permissionLevel = viewpage.permissionLevel;

      let permissionLevelMessage = "";
      switch(permissionLevel) {
        case 0:
          permissionLevelMessage = "Owner";
          break;
        case 1:
          permissionLevelMessage = "Administrators";
          break;
        case 2:
          permissionLevelMessage = "Private";
          break;
        case 3:
          permissionLevelMessage = "Public";
          break;
      }

      let editClick = {
        _id: _id,
        viewsiteId: viewsiteId,
        viewpageName: viewpageName,
        permissionLevel: permissionLevel
      };
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">
              Viewpage: {viewpageName}
            </h4>
            <p className="card-text">
              Permission Level: {permissionLevelMessage}
            </p>
          </div>
          <div className="card-footer">
            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onEditViewpage(editClick)}>
              Edit
            </a>

            <a
            className="card-link"
            href="javascript:;"
            onClick={() => props.onDeleteViewpage(deleteClick)}>
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

// Create list of tabs for Viewpages a Viewsite owns
function ViewpageTabs(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      const _id = viewpage._id;
      const viewpageName = viewpage.viewpageName;
      const tabId = _id + "-tab";
      const tabHref = "#" + _id;
      const tabControls = _id;
      return (
        <li key={tabId} className="nav-item">
          <a
          className="nav-link"
          id={tabId}
          data-toggle="tab"
          href={tabHref}
          role="tab"
          aria-controls={tabControls}
          aria-selected="false"
          onClick={() => {clearAll.call(this);}}>
            {viewpageName}
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
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      const _id = viewpage._id;
      const viewsiteId = viewpage.viewpageId;
      const viewpageName = viewpage.viewpageName;
      const permissionLevel = viewpage.permissionLevel;

      const contentControlledBy = _id + "-tab";
      const contentId = _id;

      return (
        <div
        key={contentId}
        className="tab-pane fade"
        id={contentId}
        role="tabpanel"
        aria-labelledby={contentControlledBy}>
          <Viewpage
          viewpage={viewpage} />
        </div>
      );
    });
  } else {
    return null;
  }
}

var clearAll = function() {
  $( ".createText" ).hide(false);
  $( ".updateText" ).hide(false);

  $( ".createForm" ).hide(false);
  $( ".updateForm" ).hide(false);

  $( ".createDataView" ).hide(false);
  $( ".updateDataView" ).hide(false);

  return true;
};

var createViewpage = function() {
  $( "#createViewpage" ).toggle("medium");
  $( "#updateViewpage" ).hide(false);
  this.handleClearViewpage();
};

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
            viewpages={this.state.viewpages} />
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
                      onClick={() =>  createViewpage.call(this)}>
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
                      viewpage={this.state.viewpage}
                      viewpageError={this.state.viewpageError}
                      onChange={this.handleChange}
                      onSubmit={this.handleCreateViewpage} />
                    </div>
                  </div>
                  <div id="updateViewpage" className="card mb-3">
                    <div className="card-body">
                      <ViewpageForm
                      description="Update Viewpage"
                      viewpage={this.state.viewpage}
                      viewpageError={this.state.viewpageError}
                      onChange={this.handleChange}
                      onSubmit={this.handleUpdateViewpage} />
                    </div>
                  </div>
                  <ViewpageList
                  viewpages={this.state.viewpages}
                  onEditViewpage={this.handleEditViewpage}
                  onDeleteViewpage={this.handleDeleteViewpage} />
                </div>
                <div className="col-1"></div>
              </div>
            </div>

            <ViewpageContent
            viewpages={this.state.viewpages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewsiteJSX;
