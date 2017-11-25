// Import required modules
import React, { Component } from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { Container, Header, TransparentButton, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, H1, H2, H3, List, ListItem } from 'native-base';
import { Link } from 'react-router-native';

// Import required components
import Routes from './components/Routes';
import styles from './styles.js';

function ViewpageLinks(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      let linkTo = "/" + viewpage._id;
      return(
        <ListItem key={viewpage._id}>
          <Link
            to={linkTo}
            component={TransparentButton}>
            <Text>
              {viewpage.viewpageName}
            </Text>
          </Link>
        </ListItem>
      );
    });
  } else {
    return null;
  }
}

function NavigationView(props) {
  if(props.viewsite._id) {
    return(
      <Content>
        <H1>
          {props.viewsite.viewsiteName}
        </H1>
        <List>
          <ViewpageLinks viewpages={props.viewpages} />
        </List>
      </Content>
    );
  } else {
    return null;
  }
}

function NavigationContent(props) {
  if(props.viewsite._id) {
    return (
      <Content>
        <Routes />
      </Content>
    );
  } else {
    return (
      <Content>
        <Form>
          <Item>
            <Input
              placeholder="Enter Viewsite Name..."
              onChangeText={(text) => props.onChange(text)} />
          </Item>
          <Button block
            onPress={props.onSubmit}>
            <Text>Get Viewsite</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

var DrawerLayoutJSX = function() {
  return (
    <Container>
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => NavigationView(this.state)}>
        <Header>
          <Left />
          <Body>
            <Title>
              {this.state.viewsiteName}
            </Title>
          </Body>
          <Right />
        </Header>
        <NavigationContent
          viewsiteName={this.state.viewsiteName}
          viewsite={this.state.viewsite}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit} />
        <Footer></Footer>
      </DrawerLayoutAndroid>
    </Container>
  );
}

export default DrawerLayoutJSX;
