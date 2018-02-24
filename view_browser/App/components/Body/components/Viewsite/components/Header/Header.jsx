// Import required modules
import React from 'react';

/*
 * Text Element JSX view
 */
var HeaderJSX = function () {
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
};

// Export Text Element JSX view
export default HeaderJSX;
