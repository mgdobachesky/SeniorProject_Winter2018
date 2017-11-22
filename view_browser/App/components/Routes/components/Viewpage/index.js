// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import ViewpageJSX from './Viewpage.jsx';
import './viewpage.css';

// Import required services
import TextService from './services/TextService';
import FormService from './services/FormService';
import DataViewService from './services/DataViewService';
import ViewpageService from '../../../../services/ViewpageService';

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.manageViewpageService = new ViewpageService();
    this.manageTextService = new TextService();
    this.manageFormService = new FormService();
    this.manageDataViewService = new DataViewService();
    this.handleReadAllTexts = this.handleReadAllTexts.bind(this);
    this.handleReadAllForms = this.handleReadAllForms.bind(this);
    this.handleReadAllDataViews = this.handleReadAllDataViews.bind(this);
    this.state = {
      viewpage: {},
      texts: [],
      forms: [],
      dataViews: []
    };
  }

  handleReadAllTexts() {
    let requestData = {};
    requestData.viewpageId = this.props.match.params.viewpageId;
    this.manageTextService.readAllText(requestData).then((results) => {
      this.setState({texts: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadAllForms() {
    let requestData = {};
    requestData.viewpageId = this.props.match.params.viewpageId;
    this.manageFormService.readAllFormsByViewpage(requestData).then((results) => {
      this.setState({forms: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadAllDataViews() {
    let requestData = {};
    requestData.viewpageId = this.props.match.params.viewpageId;
    this.manageDataViewService.readAllDataViews(requestData).then((results) => {
      this.setState({dataViews: results.data});
    }, (error) => {
      console.log(error.response.data);
    });
  }

  handleReadAllComponents() {
    this.handleReadAllTexts();
    this.handleReadAllForms();
    this.handleReadAllDataViews();
  }

  componentWillReceiveProps(nextProps) {
    let requestData = {};
    requestData.viewpageId = nextProps.match.params.viewpageId;
    this.manageViewpageService.readOneViewpage(requestData).then((results) => {
      this.setState({viewpage: results.data}, () => this.handleReadAllComponents());
    }, (error) => {
      console.log(error.response.data);
    });
  }

  componentDidMount() {
    let requestData = {};
    requestData.viewpageId = this.props.match.params.viewpageId;
    this.manageViewpageService.readOneViewpage(requestData).then((results) => {
      this.setState({viewpage: results.data}, () => this.handleReadAllComponents());
    }, (error) => {
      console.log(error.response.data);
    });
  }

  render() {
    return(ViewpageJSX.call(this));
  }
}

export default Viewpage;
