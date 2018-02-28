// Import required modules
import React from 'react';
import { H1, H2, H3, Content, Text } from 'native-base';

// Import requred components
import styles from './styles.js';

/*
 * Text Element JSX view
 */
var HeaderJSX = function () {
    if(this.props.element.headerSize === 3) {
        return (
          <Content>
            {this.props.element.headerValue.split('\n').map(function(item, key) {
              return (
                <H1 key={key}>
                  {item}
                </H1>
              )
            })}

            <Text>
              {"\n"}
            </Text>
          </Content>
        );
    }
    else if(this.props.element.headerSize === 2) {
        return (
          <Content>
            {this.props.element.headerValue.split('\n').map(function(item, key) {
              return (
                <H2 key={key}>
                  {item}
                </H2>
              )
            })}

            <Text>
              {"\n"}
            </Text>
          </Content>
        );
    }
    else if(this.props.element.headerSize === 1) {
        return (
          <Content>
            {this.props.element.headerValue.split('\n').map(function(item, key) {
              return (
                <H3 key={key}>
                  {item}
                </H3>
              )
            })}

            <Text>
              {"\n"}
            </Text>
          </Content>
        );
    }
};

// Export Text Element JSX view
export default HeaderJSX;
