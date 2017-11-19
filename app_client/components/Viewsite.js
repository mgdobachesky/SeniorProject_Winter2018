// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewpageForm from './ViewpageForm';
import Viewpage from './Viewpage';

// Import required services
import ViewsiteService from '../services/ViewsiteService';
import ViewpageService from '../services/ViewpageService';

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
        <a key={_id} className="nav-link" id={pillId} data-toggle="pill" href={pillHref} role="tab" aria-controls={pillControls} aria-selected="false">{viewpageName}</a>
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

class Viewsite extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.manageViewpageService = new ViewpageService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateViewpage = this.handleCreateViewpage.bind(this);
    this.handleReadAllViewpages = this.handleReadAllViewpages.bind(this);
    this.handleEditViewpage = this.handleEditViewpage.bind(this);
    this.handleUpdateViewpage = this.handleUpdateViewpage.bind(this);
    this.handleDeleteViewpage = this.handleDeleteViewpage.bind(this);
    this.state = {
      viewsite: {},
      viewpage: {
        _id: "",
        viewsiteId: "",
        viewpageName: "",
        permissionLevel: 0
      },
      viewpages: []
    };
  }

  handleCreateViewpage(event) {
    let requestData = {};
    let newViewpage = this.state.viewpage;
    let forViewsite = this.state.viewsite._id;
    requestData.viewsiteId = forViewsite;
    requestData.viewpageName = newViewpage.viewpageName;
    requestData.permissionLevel = newViewpage.permissionLevel;
    this.manageViewpageService.createViewpage(requestData).then((results) => {
      this.handleReadAllViewpages();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing viewpage state
    let clearViewpage = this.state.viewpage;
    clearViewpage._id = "";
    clearViewpage.viewsiteId = "";
    clearViewpage.viewpageName = "";
    clearViewpage.permissionLevel = "";
    this.setState({viewpage: clearViewpage});
    $("#createViewpage").hide("medium");
  }

  handleReadAllViewpages() {
    const viewsiteId = this.state.viewsite._id;
    if(viewsiteId) {
      let requestData = {};
      requestData.viewsiteId = viewsiteId;
      this.manageViewpageService.readAllViewpages(requestData).then((results) => {
        this.setState({viewpages: results.data});
      }, (error) => {
        console.log(error.response.data);
      });
    }
  }

  handleEditViewpage(event) {
    let editViewpage = this.state.viewpage;
    editViewpage._id = event._id;
    editViewpage.viewsiteId = event.viewsiteId;
    editViewpage.viewpageName = event.viewpageName;
    editViewpage.permissionLevel = event.permissionLevel;
    this.setState({viewpage: editViewpage});
    $("#updateViewpage").show("medium");
  }

  handleUpdateViewpage(event) {
    // Update Viewpage
    let requestData = {};
    let updateViewpage = this.state.viewpage;
    requestData.viewpageId = updateViewpage._id;
    requestData.viewsiteId = updateViewpage.viewsiteId;
    requestData.viewpageName = updateViewpage.viewpageName;
    requestData.permissionLevel = updateViewpage.permissionLevel;
    this.manageViewpageService.updateViewpage(requestData).then((results) => {
      this.handleReadAllViewpages();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing viewpage state
    let clearViewpage = this.state.viewpage;
    clearViewpage._id = "";
    clearViewpage.viewsiteId = "";
    clearViewpage.viewpageName = "";
    clearViewpage.permissionLevel = "";
    this.setState({viewpage: clearViewpage});
    $("#updateViewpage").hide("medium");
  }

  handleDeleteViewpage(event) {
    let requestData = {};
    requestData.viewpageId = event._id;
    this.manageViewpageService.deleteViewpage(requestData).then((results) => {
      this.handleReadAllViewpages();
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleInputChange(event, toChange) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let changeProp = this.state[toChange];
    changeProp[name] = value;
    this.setState({
      [toChange]: changeProp
    });
  }

  componentDidMount(nextProps, nextState) {
    // Load initial Viewsite
    let requestData = {};
    let currentViewsite = this.state.viewsite;
    requestData.viewsiteName = this.props.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData).then((results) => {
      currentViewsite = results.data;
      this.setState({viewsite: currentViewsite}, () => this.handleReadAllViewpages());
    }, (error) => {
      console.log(error.response.data);
    });
    $("#createViewpage").hide();
    $("#updateViewpage").hide();
    this.handleReadAllViewpages();
  }

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    let currentViewsite = this.state.viewsite;
    requestData.viewsiteName = nextProps.match.params.viewsiteName;
    this.manageViewsiteService.readOneViewsite(requestData).then((results) => {
      currentViewsite = results.data;
      this.setState({viewsite: currentViewsite}, () => this.handleReadAllViewpages());
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    const viewsite = this.state.viewsite;
    const viewpage = this.state.viewpage;
    const viewpages = this.state.viewpages;
    return (
      <div className="container">
        <h1>{this.props.match.params.viewsiteName}</h1>
        <div className="row">
          <div className="col-md-auto">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-viewpages-tab" data-toggle="pill" href="#v-pills-viewpages" role="tab" aria-controls="v-pills-viewpages" aria-selected="true">Manage Viewpages</a>
              <ViewpagePillList
                viewpages={viewpages} />
            </div>
          </div>
          <div className="col-md">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-viewpages" role="tabpanel" aria-labelledby="v-pills-viewpages-tab">
                <button type="button" className="btn btn-link" onClick={() => $( "#createViewpage" ).toggle("medium")}>+ New Viewpage</button>
                <div id="createViewpage" className="card mb-3">
                  <div className="card-body">
                    <ViewpageForm
                      description="Create Viewpage"
                      viewpage={viewpage}
                      onInputChange={this.handleInputChange}
                      onSubmit={this.handleCreateViewpage} />
                  </div>
                </div>
                <div id="updateViewpage" className="card mb-3">
                  <div className="card-body">
                    <ViewpageForm
                      description="Update Viewpage"
                      viewpage={viewpage}
                      onInputChange={this.handleInputChange}
                      onSubmit={this.handleUpdateViewpage} />
                  </div>
                </div>
                <ViewpageList
                  viewpages={viewpages}
                  onEditViewpage={this.handleEditViewpage}
                  onDeleteViewpage={this.handleDeleteViewpage} />
              </div>
              <ViewpageContentList
                viewpages={viewpages} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewsite;
