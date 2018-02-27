// Import required modules
import React from 'react';

/*
 * Text Element JSX view
 */
var HeaderJSX = function () {
    if(this.props.element.headerSize === 3) {
        return (
            <div>
                <h1>
                    {this.props.element.headerValue.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
              {item}
                                <br/>
            </span>
                        )
                    })}
                </h1>

                <br/>
            </div>
        );
    }
    else if(this.props.element.headerSize === 2) {
        return (
            <div>
                <h2>
                    {this.props.element.headerValue.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
              {item}
                                <br/>
            </span>
                        )
                    })}
                </h2>

                <br/>
            </div>
        );
    }
    else if(this.props.element.headerSize === 1) {
        return (
            <div>
                <h3>
                    {this.props.element.headerValue.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
              {item}
                                <br/>
            </span>
                        )
                    })}
                </h3>

                <br/>
            </div>
        );
    }
};

// Export Text Element JSX view
export default HeaderJSX;
