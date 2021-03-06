// Import required modules
import React from 'react';

// Import requred components
import Text from '../Text';
import Form from '../Form';
import DataView from '../DataView';
import Image from '../Image';
import Header from '../Header';

/*
 * Display each element based on Element kind
 * Used by ViewpageJSX
 */
function ElementsView(props) {
    if (props.elements) {
        return props.elements.map((element, index) => {
            if (element.kind === "text") {
                return (
                    <Text
                        key={element._id}
                        element={element}/>
                );
            } else if (element.kind === "header") {
                return (
                    <Header
                        key={element._id}
                        element={element}/>
                );
            } else if (element.kind === "form") {
                return (
                    <Form
                        key={element._id}
                        viewsiteId={props.viewsiteId}
                        element={element}
                        userDatabase={props.userDatabase}
                        onUpdateUserTable={props.onUpdateUserTable}/>
                );
            } else if (element.kind === "dataView") {
                return (
                    <DataView
                        key={element._id}
                        element={element}
                        userForms={props.userForms}
                        userDatabase={props.userDatabase}/>
                );
            } else if (element.kind === "image") {
                return (
                    <Image
                        key={element._id}
                        element={element}/>
                );
            }
        });
    } else {
        return null;
    }
}

/*
 * Viewpage JSX view
 */
var ViewpageJSX = function () {
    return (
        <div className="container-fluid">
            <br/>

            <div className="row">
                <div className="col-10 offset-1">
                    <ElementsView
                        viewsiteId={this.props.viewsiteId}
                        elements={this.props.viewpage.elements}
                        userDatabase={this.props.userDatabase}
                        userForms={this.props.userForms}
                        onUpdateUserTable={this.handleUpdateUserTable}/>
                </div>
            </div>
        </div>
    );
};

// Export the Viewpage JSX view
export default ViewpageJSX;
