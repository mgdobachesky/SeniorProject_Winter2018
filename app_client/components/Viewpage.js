// Import required modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import requred components
import TextForm from './TextForm';

// Import required services
import TextService from '../services/TextService';

// Create list of Text a Viewpage owns
function TextList(props) {
  if(props.texts) {
    return props.texts.map((text, index) => {
      const _id = text._id;
      const viewpageId = text.viewpageId;
      const textValue = text.textValue;
      let editClick = {_id: _id, viewpageId: viewpageId, textValue: textValue};
      let deleteClick = {_id: _id};
      return (
        <div key={_id} className="card">
          <div className="card-body">
            <h4 className="card-title">Text</h4>
            <p className="card-text">{textValue}</p>
            <a className="card-link" href="javascript:;" onClick={() => props.onEditText(editClick)}>Edit</a>
            <a className="card-link" href="javascript:;" onClick={() => props.onDeleteText(deleteClick)}>Delete</a>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
}

class Viewpage extends React.Component {
  constructor(props) {
    super(props);
    this.manageTextService = new TextService();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateText = this.handleCreateText.bind(this);
    this.handleReadAllText = this.handleReadAllText.bind(this);
    this.handleEditText = this.handleEditText.bind(this);
    this.handleUpdateText = this.handleUpdateText.bind(this);
    this.handleDeleteText = this.handleDeleteText.bind(this);
    this.state = {
      text: {
        _id: "",
        viewpageId: "",
        textValue: ""
      },
      texts: []
    };
  }

  handleCreateText(event) {
    const requestData = this.state.text;
    this.manageTextService.createText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      console.log(error.response.data);
    });
    let clearText = this.state.text;
    clearText.textValue = "";
    this.setState({text: clearText});
    $(".createText").hide("medium");
  }

  handleReadAllText() {
    let currentViewpage = this.props.viewpage;
    let viewpageTexts = [];
    let requestData = this.state.text;
    requestData.viewpageId = currentViewpage._id;

    this.manageTextService.readAllText(requestData).then((results) => {
      this.setState({texts: results.data});
    }, (error) => {
      console.log(error.response.data);
    });

  }

  handleEditText(event) {
    let editText = this.state.text;
    editText._id = event._id;
    editText.textValue = event.textValue;
    this.setState({text: editText});
    $(".updateText").show("medium");
  }

  handleUpdateText(event) {
    // Update Text
    let requestData = {};
    let updateText = this.state.text;
    requestData.textId = updateText._id;
    requestData.textValue = updateText.textValue;
    this.manageTextService.updateText(requestData).then((results) => {
      this.handleReadAllText();
    }, (error) => {
      console.log(error.response.data);
    });
    // Follow up by clearing text state
    let clearText = this.state.text;
    clearText.textValue = "";
    this.setState({text: clearText});
    $(".updateText").hide("medium");
  }

  handleDeleteText(event) {
    let requestData = {};
    requestData.textId = event._id;
    this.manageTextService.deleteText(requestData).then((results) => {
      this.handleReadAllText();
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
    let currentViewpage = this.props.viewpage;
    let currentText = this.state.text;
    currentText.viewpageId = currentViewpage._id;
    this.setState({text: currentText});

    this.handleReadAllText();
    $(".createText").hide();
    $(".updateText").hide();
    $(".createForm").hide();
    $(".createDataView").hide();
  }

  render() {
    const viewpage = this.props.viewpage;
    const text = this.state.text;
    const texts = this.state.texts;

    return (
      <div className="container">
        <h1>{viewpage.viewpageName}</h1>
        <button type="button" className="btn btn-link" onClick={() => $( ".createText" ).toggle("medium")}>+ Add Text</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createForm" ).toggle("medium")}>+ Add Form</button>
        <button type="button" className="btn btn-link" onClick={() => $( ".createDataView" ).toggle("medium")}>+ Add Data-View</button>
        <div id="createText" className="card createText">
          <div className="card-body">
            <TextForm
              description="Add Text"
              text={text}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleCreateText} />
          </div>
        </div>
        <div id="updateText" className="card updateText">
          <div className="card-body">
            <TextForm
              description="Update Text"
              text={text}
              onInputChange={this.handleInputChange}
              onSubmit={this.handleUpdateText} />
          </div>
        </div>
        <div id="createForm" className="card createForm">
          <div className="card-body">
            // Create Form
          </div>
        </div>
        <div id="createDataView" className="card createDataView">
          <div className="card-body">
            // Create Data-View
          </div>
        </div>
        <TextList
          texts={texts}
          onEditText={this.handleEditText}
          onDeleteText={this.handleDeleteText} />
      </div>
    );
  }
}

export default Viewpage;
