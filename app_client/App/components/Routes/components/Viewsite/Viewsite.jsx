// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

      let editClick = {_id: _id, viewsiteId: viewsiteId, viewpageName: viewpageName, permissionLevel: permissionLevel};
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card border-primary mb-3">
          <div className="card-body">
            <h4 className="card-title">Viewpage: {viewpageName}</h4>
            <p className="card-text">Permission Level: {permissionLevelMessage}</p>
          </div>
          <div className="card-footer">
            <a className="card-link" href="javascript:;" onClick={() => props.onEditViewpage(editClick)}>Edit</a>
            <a className="card-link" href="javascript:;" onClick={() => props.onDeleteViewpage(deleteClick)}>Delete</a>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

// Create list of pills for Viewpages a Viewsite owns
function ViewpagePillList(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      const _id = viewpage._id;
      const viewpageName = viewpage.viewpageName;
      const pillId = "v-pills-" + _id + "-tab";
      const pillHref = "#v-pills-" + _id;
      const pillControls = "v-pills-" + _id;
      return (
        <a
          key={_id}
          className="nav-link"
          id={pillId}
          data-toggle="pill"
          href={pillHref}
          role="tab"
          aria-controls={pillControls}
          aria-selected="false"
          onClick={() => {clearAll.call(this);}}>
          {viewpageName}
        </a>
      );
    });
  } else {
    return null;
  }
}

// Create list of Viewpages content a Viewsite owns
function ViewpageContentList(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      const _id = viewpage._id;
      const viewsiteId = viewpage.viewpageId;
      const viewpageName = viewpage.viewpageName;
      const permissionLevel = viewpage.permissionLevel;

      const pillControls = "v-pills-" + _id + "-tab";
      const pillId= "v-pills-" + _id;

      return (
        <div key={_id} className="tab-pane fade" id={pillId} role="tabpanel" aria-labelledby={pillControls}>
          <Viewpage viewpage={viewpage} />
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
    <div className="container">
      <h1>{this.props.match.params.viewsiteName}</h1>
      <div className="row">
        <div className="col-md-auto">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-viewpages-tab" data-toggle="pill" href="#v-pills-viewpages" role="tab" aria-controls="v-pills-viewpages" aria-selected="true">Manage Viewpages</a>
            <ViewpagePillList
              viewpages={this.state.viewpages} />
          </div>
        </div>
        <div className="col-md">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-viewpages" role="tabpanel" aria-labelledby="v-pills-viewpages-tab">
              <button type="button" className="btn btn-link" onClick={() =>  createViewpage.call(this)}>+ New Viewpage</button>
              <div id="createViewpage" className="card mb-3">
                <div className="card-body">
                  <ViewpageForm
                    description="Create Viewpage"
                    viewpage={this.state.viewpage}
                    onChange={this.handleChange}
                    onSubmit={this.handleCreateViewpage} />
                </div>
              </div>
              <div id="updateViewpage" className="card mb-3">
                <div className="card-body">
                  <ViewpageForm
                    description="Update Viewpage"
                    viewpage={this.state.viewpage}
                    onChange={this.handleChange}
                    onSubmit={this.handleUpdateViewpage} />
                </div>
              </div>
              <ViewpageList
                viewpages={this.state.viewpages}
                onEditViewpage={this.handleEditViewpage}
                onDeleteViewpage={this.handleDeleteViewpage} />
            </div>
            <ViewpageContentList
              viewpages={this.state.viewpages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewsiteJSX;
