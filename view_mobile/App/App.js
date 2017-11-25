// Import required modules
import React, { Component } from 'react';
import { NativeRouter, Route, Link, AndroidBackButton } from 'react-router-native';

// Import requred components
import DrawerLayout from './components/DrawerLayout';
import styles from './styles.js';

// Create main App
var AppJSX = function() {
  return(
    <NativeRouter>
      <AndroidBackButton>
        <DrawerLayout />
      </AndroidBackButton>
    </NativeRouter>
  );
}
export default AppJSX;
