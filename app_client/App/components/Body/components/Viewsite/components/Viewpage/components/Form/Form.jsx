// Import required modules
import React from 'react';

// Import requred components
import TextboxForm from './components/TextboxForm';

/*
 * Method used to prepare the create form for use
 * Used in FormJSX
 */
var prepareCreateTextbox = function () {
    $(".createTextbox").toggle("medium");
    $(".updateTextbox").hide(false);
    this.handleClearLocalState();
};

/*
 * Create list of Textboxs a Form owns
 * Used by FormJSX
 */
function FormInputList(props) {
    if (props.formInputs && props.formInputs.length >= 1) {
        const viewsiteId = props.viewsiteId;
        const viewpageId = props.viewpageId;
        const elementId = props.elementId;

        return props.formInputs.map((formInput, index) => {
            const _id = formInput._id;
            // Display Form Input based on 'kind'
            if (formInput.kind === "textbox") {
                // Display Textbox Form Input
                return (
                    <TextboxFormInput
                        key={_id}
                        viewsiteId={viewsiteId}
                        viewpageId={viewpageId}
                        elementId={elementId}
                        formInput={formInput}
                        onEditFormInput={props.onEditFormInput}
                        onDeleteFormInput={props.onDeleteFormInput}/>
                );
            }
        });
    } else {
        return null;
    }
}

/*
 * Method used to display individual Form Inputs
 * Used by FormInputList
 */
function TextboxFormInput(props) {
    // Data needed to edit a Textbox Form Input
    let editClick = {
        viewsiteId: props.viewsiteId,
        viewpageId: props.viewpageId,
        elementId: props.elementId,
        _id: props.formInput._id,
        kind: props.formInput.kind,
        textboxLabel: props.formInput.textboxLabel
    };
    // Data needed to delete a Textbox Form Input
    let deleteClick = {
        viewsiteId: props.viewsiteId,
        viewpageId: props.viewpageId,
        elementId: props.elementId,
        _id: props.formInput._id,
        kind: props.formInput.kind
    };

    return (
        <li key={props.formInput._id} className="list-group-item d-flex" id={props.formInput._id + "," + props.elementId}>
            <div className="mr-auto p-2">
                <p><b>Textbox Label: </b>{props.formInput.textboxLabel}</p>
            </div>

            <div>
                <a
                    className="p-2"
                    href="javascript:"
                    onClick={() => props.onEditFormInput(editClick)}>
                    <button type="button" className="btn btn-link btn-sm">
                        Edit Textbox
                    </button>
                </a>
            </div>

            <div>
                <a
                    className="p-2"
                    href="javascript:"
                    onClick={() => props.onDeleteFormInput(deleteClick)}>
                    <button type="button" className="btn btn-danger btn-sm">
                        Delete Textbox
                    </button>
                </a>
            </div>
        </li>
    );
}

/*
 * Form JSX view
 */
var FormJSX = function () {
    return (
        <div key={this.props.element._id} className="card border-primary mb-3">
            <div className="card-header">
                <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => {
                        prepareCreateTextbox.call(this);
                    }}>
                    <i className="fa fa-plus" aria-hidden="true"></i> Add Textbox
                </button>
            </div>

            <div className="card-body createTextbox">
                <TextboxForm
                    description="Create Textbox"
                    action="create"
                    textbox={this.state.textbox}
                    formInputSuccess={this.state.formInputSuccess}
                    formInputError={this.state.formInputError}
                    onChange={this.handleChange}
                    onSubmit={this.handleCreateFormInput}/>
            </div>

            <div className="card-body updateTextbox">
                <TextboxForm
                    description="Update Textbox"
                    action="update"
                    textbox={this.state.textbox}
                    formInputSuccess={this.state.formInputSuccess}
                    formInputError={this.state.formInputError}
                    onChange={this.handleChange}
                    onSubmit={this.handleUpdateFormInput}/>
            </div>

            <div className="card-body">
                <h4 className="card-title">
                    <b>Form Title: </b>{this.props.element.formTitle}
                </h4>

                <p className="card-text"></p>
            </div>
            <ul className="list-group list-group-flush formInputs-sortable">
                <FormInputList
                    viewsiteId={this.state.viewsiteId}
                    viewpageId={this.state.viewpageId}
                    elementId={this.state.element._id}
                    formInputs={this.state.element.formInputs}
                    onEditFormInput={this.handleEditFormInput}
                    onDeleteFormInput={this.handleDeleteFormInput}/>
            </ul>

            <div className="card-footer">
                <a
                    className="card-link"
                    href="javascript:"
                    onClick={() => this.props.onEditElement({
                        viewsiteId: this.props.viewsiteId,
                        viewpageId: this.props.viewpageId,
                        _id: this.props.element._id,
                        kind: "form",
                        formTitle: this.props.element.formTitle
                    })}>
                    <button type="button" className="btn btn-link">
                        Edit Form
                    </button>
                </a>

                <a
                    className="card-link float-right"
                    href="javascript:"
                    onClick={() => this.props.onDeleteElement({
                        viewsiteId: this.props.viewsiteId,
                        viewpageId: this.props.viewpageId,
                        _id: this.props.element._id,
                        kind: "form"
                    })}>
                    <button type="button" className="btn btn-danger">
                        Delete Form
                    </button>
                </a>
            </div>
        </div>
    );
};

// Export the Form JSX view
export default FormJSX;
