// Import required modules
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Import requred components
import ViewsiteJSX from './Viewsite.jsx';
import './viewsite.css';

// Import required services
import ViewsiteService from '../../../../services/ViewsiteService';
import ViewpageService from './services/ViewpageService';

class Viewsite extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewsiteService = new ViewsiteService();
    this.manageViewpageService = new ViewpageService();
    this.handleChange = this.handleChange.bind(this);
    this.handleCreateViewpage = this.handleCreateViewpage.bind(this);
    this.handleReadAllViewpages = this.handleReadAllViewpages.bind(this);
    this.handleEditViewpage = this.handleEditViewpage.bind(this);
    this.handleUpdateViewpage = this.handleUpdateViewpage.bind(this);
    this.handleDeleteViewpage = this.handleDeleteViewpage.bind(this);
    this.handleClearViewpage = this.handleClearViewpage.bind(this);
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
    this.handleClearViewpage();
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
    $("#updateViewpage").toggle("medium");
    $("#createViewpage").hide(false);
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
    this.handleClearViewpage();
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

  handleClearViewpage() {
    let clearViewpage = this.state.viewpage;
    clearViewpage._id = "";
    clearViewpage.viewsiteId = "";
    clearViewpage.viewpageName = "";
    clearViewpage.permissionLevel = "";
    this.setState({viewpage: clearViewpage});
  }

  handleChange(event, toChange) {
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
    $("#createViewpage").hide(false);
    $("#updateViewpage").hide(false);
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
    if(this.props.user._id) {
      return(ViewsiteJSX.call(this));
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Viewsite;
