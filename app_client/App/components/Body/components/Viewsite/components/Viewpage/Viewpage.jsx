// Import required modules
import React from 'react';

// Import requred components
import TextForm from './components/TextForm';
import FormForm from './components/FormForm';
import Form from './components/Form';
import DataViewForm from './components/DataViewForm';

/*
 * Create list of Elements a Viewpage owns
 * Used by ViewpageJSX
 */
function ElementList(props) {
  if(props.elements && props.elements.length >= 1) {
    const viewsiteId = props.viewsiteId;
    const viewpageId = props.viewpageId;
    const userTables = props.userTables;

    return props.elements.map((element, index) => {
      const _id = element._id;

      if(element.kind === "text") {
        // For Text Elements
        return (
          <TextElement
          key={_id}
          viewsiteId={viewsiteId}
          viewpageId={viewpageId}
          element={element}
          onEditElement={props.onEditElement}
          onDeleteElement={props.onDeleteElement} />
        );
      }
      else if(element.kind === "form") {
        // For Form Elements
        return (
          <FormElement
          key={_id}
          viewsiteId={viewsiteId}
          viewpageId={viewpageId}
          element={element}
          onEditElement={props.onEditElement}
          onDeleteElement={props.onDeleteElement}
          onSetGlobalState={props.onSetGlobalState} />
        );
      }
      else if(element.kind === "dataView") {
        // For Data View Elements
        return (
          <DataViewElement
          key={_id}
          viewsiteId={viewsiteId}
          viewpageId={viewpageId}
          element={element}
          userTables={userTables}
          onEditElement={props.onEditElement}
          onDeleteElement={props.onDeleteElement} />
        );
      }
    });
  } else {
    return null;
  }
}

/*
 * Display a Text Element
 * Used by the ElementList in ViewpageJSX
 */
function TextElement(props) {
  // Data needed to edit a Text Element
  const editClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    _id: props.element._id,
    kind: props.element.kind,
    textValue: props.element.textValue
  };
  // Data needed to delete a Text Element
  const deleteClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    _id: props.element._id,
    kind: props.element.kind
  };

  return (
    <div className="card border-primary mb-3">
      <div className="card-body">
        <h4 className="card-title">
          Text
        </h4>
        <p className="card-text">
          {props.element.textValue.split('\n').map(function(item, key) {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            )
          })}
        </p>
      </div>

      <div className="card-footer">
        <a
        className="card-link"
        href="javascript:;"
        onClick={() => props.onEditElement(editClick)}>
          Edit
        </a>

        <a
        className="card-link"
        href="javascript:;"
        onClick={() => props.onDeleteElement(deleteClick)}>
          Delete
        </a>
      </div>
    </div>
  );
}

/*
 * Display a Form Element
 * Used by the ElementList in ViewpageJSX
 */
function FormElement(props) {
  return (
    <Form
    viewsiteId={props.viewsiteId}
    viewpageId={props.viewpageId}
    element={props.element}
    onEditElement={props.onEditElement}
    onDeleteElement={props.onDeleteElement}
    onSetGlobalState={props.onSetGlobalState} />
  );
}

/*
 * Display a Data View Element
 * Used by the ElementList in ViewpageJSX
 */
function DataViewElement(props) {
  // Data needed to edit a Data View
  const editClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    _id: props.element._id,
    kind: props.element.kind,
    formId: props.element.formId
  };
  // Data needed to delete a Data View
  const deleteClick = {
    viewsiteId: props.viewsiteId,
    viewpageId: props.viewpageId,
    _id: props.element._id,
    kind: props.element.kind
  };
  // Determine the title of the Form the Data View's User Table represents
  let sourceName = "";
  for(const userTable of props.userTables) {
    if(props.element.formId == userTable._id) {
      sourceName = userTable.formTitle;
    }
  }

  return (
    <div className="card border-primary mb-3">
      <div className="card-body">
        <h4 className="card-title">
          Data-View
        </h4>

        <p className="card-text">
          Source: {sourceName}
        </p>
      </div>

      <div className="card-footer">
        <a
        className="card-link"
        href="javascript:;"
        onClick={() => props.onEditElement(editClick)}>
          Edit
        </a>

        <a
        className="card-link"
        href="javascript:;"
        onClick={() => props.onDeleteElement(deleteClick)}>
          Delete
        </a>
      </div>
    </div>
  );
}

/*
 * Method for preparing the forms for a Text creation
 * It hides every form other than the create Text form
 */
var prepareCreateText = function() {
  $( ".createText" ).toggle("medium");
  $( ".updateText" ).hide(false);

  $( ".createForm" ).hide(false);
  $( ".updateForm" ).hide(false);

  $( ".createDataView" ).hide(false);
  $( ".updateDataView" ).hide(false);

  this.handleClearLocalState();
};

/*
 * Method for preparing the forms for a Form creation
 * It hides every form other than the create Form form
 */
var prepareCreateForm = function() {
  $( ".createForm" ).toggle("medium");
  $( ".updateForm" ).hide(false);

  $( ".createText" ).hide(false);
  $( ".updateText" ).hide(false);

  $( ".createDataView" ).hide(false);
  $( ".updateDataView" ).hide(false);

  this.handleClearLocalState();
};

/*
 * Method for preparing the forms for a Data View creation
 * It hides every form other than the create Data View form
 */
var prepareCreateDataView = function() {
  $( ".createDataView" ).toggle("medium");
  $( ".updateDataView" ).hide(false);

  $( ".createText" ).hide(false);
  $( ".updateText" ).hide(false);

  $( ".createForm" ).hide(false);
  $( ".updateForm" ).hide(false);

  this.handleClearLocalState();
};

/*
 * Viewpage JSX view
 */
var ViewpageJSX = function() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-auto">
          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {prepareCreateText.call(this);}}>
              + Add Text
            </button>
          </div>

          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {prepareCreateForm.call(this);}}>
              + Add Form
            </button>
          </div>

          <div className="row">
            <button
            type="button"
            className="btn btn-link"
            onClick={() => {prepareCreateDataView.call(this);}}>
              + Add Data-View
            </button>
          </div>
        </div>

        <div className="col">
          <div id="createText" className="card createText mb-3">
            <div className="card-body">
              <TextForm
              description="Add Text"
              action="create"
              text={this.state.text}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateElement} />
            </div>
          </div>

          <div id="updateText" className="card updateText mb-3">
            <div className="card-body">
              <TextForm
              description="Update Text"
              action="update"
              text={this.state.text}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateElement} />
            </div>
          </div>

          <div id="createForm" className="card createForm mb-3">
            <div className="card-body">
              <FormForm
              description="Add Form"
              action="create"
              form={this.state.form}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateElement} />
            </div>
          </div>

          <div id="updateForm" className="card updateForm mb-3">
            <div className="card-body">
              <FormForm
              description="Update Form"
              action="update"
              form={this.state.form}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateElement} />
            </div>
          </div>

          <div id="createDataView" className="card createDataView mb-3">
            <div className="card-body">
              <DataViewForm
              description="Create Data-View"
              action="create"
              dataView={this.state.dataView}
              userTables={this.state.userTables}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleCreateElement} />
            </div>
          </div>

          <div id="updateDataView" className="card updateDataView mb-3">
            <div className="card-body">
              <DataViewForm
              description="Update Data-View"
              action="update"
              dataView={this.state.dataView}
              userTables={this.state.userTables}
              elementSuccess={this.state.elementSuccess}
              elementError={this.state.elementError}
              onChange={this.handleChange}
              onSubmit={this.handleUpdateElement} />
            </div>
          </div>

          <ElementList
          viewsiteId={this.state.viewsiteId}
          viewpageId={this.state.viewpage._id}
          elements={this.state.viewpage.elements}
          userTables={this.state.userTables}
          onEditElement={this.handleEditElement}
          onDeleteElement={this.handleDeleteElement}
          onSetGlobalState={this.handleSetGlobalState} />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
}

// Export the ViewpageJSX view
export default ViewpageJSX;
