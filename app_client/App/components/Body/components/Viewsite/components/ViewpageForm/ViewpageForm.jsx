// Import required modules
import React from 'react';

/*
 * Alert that notifies the User of any successful operations
 * Used by ViewpageFormJSX
 */
var SuccessAlert = function (props) {
    if (props.viewpageSuccess) {
        return (
            <div className="alert alert-success" role="alert">
                {props.viewpageSuccess}
            </div>
        );
    } else {
        return null;
    }
};

/*
 * Alert that notifies the User of any unsuccessful operations
 * Used by ViewpageFormJSX
 */
var ErrorAlert = function (props) {
    if (props.viewpageError) {
        return (
            <div className="alert alert-danger" role="alert">
                {props.viewpageError}
            </div>
        );
    } else {
        return null;
    }
};

/*
 * Contents of the main Viewpage form
 * Used by ViewpageFormJSX
 */
var ViewpageFormContents = function () {
    if (this.props.viewpage.kind && this.props.viewpage.kind == 'landingPage') {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="viewpageName">
                        Viewpage Name

                        <input
                            type="text"
                            name="viewpageName"
                            className="form-control"
                            id="viewpageName"
                            value={this.props.viewpage.viewpageName}
                            readOnly/>
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="catchPhrase">
                        Catch Phrase:

                        <input
                            type="text"
                            name="catchPhrase"
                            className="form-control"
                            id="catchPhrase"
                            placeholder="Enter Catch Phrase"
                            value={this.props.viewpage.catchPhrase}
                            onChange={this.handleChange}/>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    {this.props.description}
                </button>
            </form>
        );
    } else {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="viewpageName">
                        Viewpage Name

                        <input
                            type="text"
                            name="viewpageName"
                            className="form-control"
                            id="viewpageName"
                            placeholder="Enter Viewpage Name"
                            value={this.props.viewpage.viewpageName}
                            onChange={this.handleChange}/>
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="permissionLevel">
                        Permission Level:

                        <select
                            id="permissionLevel"
                            name="permissionLevel"
                            className="form-control"
                            value={this.props.viewpage.permissionLevel}
                            onChange={this.handleChange}>
                            <option value="3">Public</option>
                            <option value="2">Private</option>
                            <option value="1">Administrators</option>
                            <option value="0">Owner</option>
                        </select>
                    </label>
                </div>

                <button type="submit" className="btn btn-primary">
                    {this.props.description}
                </button>
            </form>
        );
    }
};

/*
 * Viewpage Form JSX view
 */
var ViewpageFormJSX = function () {
    return (
        <div className="container-fluid">
            <h2>
                {this.props.description}
            </h2>

            <SuccessAlert
                viewpageSuccess={this.props.viewpageSuccess}/>

            <ErrorAlert
                viewpageError={this.props.viewpageError}/>

            {ViewpageFormContents.call(this)}
        </div>
    );
};

// Export the Viewpage Form view
export default ViewpageFormJSX;
