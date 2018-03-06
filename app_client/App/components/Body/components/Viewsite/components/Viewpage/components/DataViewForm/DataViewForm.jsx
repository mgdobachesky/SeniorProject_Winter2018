// Import required modules
import React from 'react';

/*
 * Alert to notify users of any successful operations
 * Used by DataViewFormJSX
 */
var SuccessAlert = function (props) {
    if (props.elementSuccess) {
        return (
            <div className="alert alert-success" role="alert">
                {props.elementSuccess}
            </div>
        );
    } else {
        return null;
    }
};

/*
 * Alert to notify users of any unsuccessful operations
 * Used by DataViewFormJSX
 */
var ErrorAlert = function (props) {
    if (props.elementError) {
        return (
            <div className="alert alert-danger" role="alert">
                {props.elementError}
            </div>
        );
    } else {
        return null;
    }
};

/*
 * Create list of Form Options for the Data View
 * Used by DataViewFormJSX
 *
 * NOTE: Forms and User Tables share an ID
 */
function DataViewOptions(props) {
    if (props.userTables && props.userTables.length >= 1) {
        // Create list of User Tables for the Viewsite
        return props.userTables.map((userTable, index) => {
            const _id = userTable._id;
            const formTitle = userTable.formTitle;
            return (
                <option key={_id} value={_id}>
                    {formTitle}
                </option>
            );
        });
    } else {
        return (
            <option disabled>
                No Forms exist yet!
            </option>
        );
    }
}

/*
 * Data View Form JSX view
 */
var DataViewFormJSX = function () {
    return (
        <div className="container-fluid">
            <h2>
                {this.props.description} <span> </span>
                <i className="fa fa-question-circle fa-xs" data-toggle="tooltip" data-placement="auto"
                   title="Data Viewers allow you to view all the data you collect through your forms. To implement a data viewer, you must first create your form, and then select that form in the dropdown below."></i>
            </h2>

            <SuccessAlert
                elementSuccess={this.props.elementSuccess}/>

            <ErrorAlert
                elementError={this.props.elementError}/>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="formId">
                        Data Viewer:

                        <select
                            id="formId"
                            name="formId"
                            className="form-control"
                            value={this.props.dataView.formId}
                            onChange={this.handleChange}>
                            <option value="" disabled hidden>
                                Choose Form...
                            </option>

                            <DataViewOptions userTables={this.props.userTables}/>
                        </select>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    {this.props.description}
                </button>
            </form>
        </div>
    );
};

// Export the Data View Form JSX view
export default DataViewFormJSX;
