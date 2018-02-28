// Import required modules
import React from 'react';
import { Image } from 'react-native';
import { Content, Text } from 'native-base';

// Import requred components
import styles from './styles.js';

/*
 * Image View JSX view
 */
var ImageViewJSX = function() {
  return (
    <Content
    contentContainerStyle={styles.imageContainer}>
      <Image
      style={styles.imageStyle}
      source={{uri: "https://www.cadre.me/" + this.props.element.imageLocation}} />

      <Text>
        {"\n"}
      </Text>
    </Content>
  );
}

// Export ImageView JSX view
export default ImageViewJSX;
