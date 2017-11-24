// Import required modules
import React, { Component } from 'react';
import { View, DrawerLayoutAndroid, Text, TouchableHighlight, TextInput } from 'react-native';

function ViewpageLinks(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      return(
        <Text>
          {viewpage.viewpageName}
        </Text>
      );
    });
  } else {
    return null;
  }
}

function NavigationView(props) {
  if(props.viewsite._id) {
    return(
      <View>
        <Text>
          {props.viewsite.viewsiteName}
        </Text>
        <ViewpageLinks viewpages={props.viewpages} />
      </View>
    );
  } else {
    return null;
  }
}

function NavigationContent(props) {
  if(props.viewsite._id) {
    return (
      <View>
        <Text>Hello</Text>
        <Text>World!</Text>
      </View>
    );
  } else {
    return (
      <View>
        <TextInput
          placeholder="Enter Viewsite Name..."
          onChangeText={(text) => props.onChange(text)} />
        <TouchableHighlight onPress={props.onSubmit} underlayColor="white">
          <View>
            <Text>Get Viewsite</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

var DrawerLayoutJSX = function() {
  return (
    <DrawerLayoutAndroid
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => NavigationView(this.state)}>
      <NavigationContent
        viewsiteName={this.state.viewsiteName}
        viewsite={this.state.viewsite}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    </DrawerLayoutAndroid>
  );
}

export default DrawerLayoutJSX;
