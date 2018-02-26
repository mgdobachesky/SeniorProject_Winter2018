// Import required modules
import React from 'react';
import Dropdown from 'react-dropdown'
/*
 * Alert to notify users of any successful operations
 * Used by TextFormJSX
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
 * Used by TextFormJSX
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
 * Text Form JSX view
 */
var HeaderFormJSX = function () {
//a
    const headerType = ['Pick a size', 'Large', 'Medium', 'Small'];
    const defaultOption = this.state.selected;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label;
    return (
        <div className="container-fluid">
            <h2>
                {this.props.description}
            </h2>

            <SuccessAlert
                elementSuccess={this.props.elementSuccess}/>

            <ErrorAlert
                elementError={this.props.elementError}/>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="headerValue">
                        Header Value

                        <textarea
                            name="headerValue"
                            className="form-control"
                            id="headerValue"
                            placeholder="Insert header text..."
                            value={this.props.header.headerValue}
                            onChange={this.handleChange}/>
                    </label>
                        {/*<Dropdown options={headerType} onChange={this._onSelect} value={defaultOption}*/}
                              {/*placeholder="Select an option"/>*/}
                    <div className="form-group">
                        <label htmlFor="headerSize">
                            Header Size:

                            <select
                                id="headerSize"
                                name="headerSize"
                                className="form-control"
                                value={this.props.header.headerSize}
                                onChange={this.handleChange}>
                                <option value="3">Large</option>
                                <option value="2">Medium</option>
                                <option value="1">Small</option>
                            </select>
                        </label>
                    </div>
                    {/*typeOfHeader={placeHolderValue}*/}
                </div>

                <button type="submit" className="btn btn-primary">
                    {this.props.description}
                </button>
            </form>
        </div>
    );
};

// Export the Text Form JSX view
export default HeaderFormJSX;
