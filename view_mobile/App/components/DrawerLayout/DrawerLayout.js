// Import required modules
import React from 'react';
import { Link } from 'react-router-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  H1,
  H2,
  H3,
  List,
  ListItem,
  Drawer
} from 'native-base';

// Import required components
import AppContent from './components/AppContent';
import styles from './styles.js';

/*
 * Display of each individual link in the Navigation Drawer
 * Used By NavigationView
 */
function ViewpageLinks(props) {
  if(props.viewpages) {
    return props.viewpages.map((viewpage, index) => {
      let linkTo = "/" + viewpage._id;
      return(
        <ListItem key={viewpage._id}>
          <Link to={linkTo}>
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

/*
 * Display of inside the Navigation Drawer, and contains links to
 * each Viewpage
 * Used by DrawerLayoutJSX
 */
function NavigationView(props) {
  if(props.viewsite._id) {
    return(
      <Content style={{backgroundColor:'#FFFFFF'}}>
        <H1>
          {props.viewsite.viewsiteName}
        </H1>
        <List>
          <ViewpageLinks
          viewpages={props.viewpages} />
        </List>
      </Content>
    );
  } else {
    return null;
  }
}

/*
 * Content that is populated when a user clicks the associated link
 * in the Navigation Drawer
 * Used by DrawerLayoutJSX
 */
function NavigationContent(props) {
  if(props.viewsite._id) {
    return (
      <Content>
        <AppContent
        viewsiteId={props.viewsite._id}
        viewpages={props.viewpages}
        userDatabase={props.userDatabase}
        userForms={props.userForms}
        onUpdateUserTable={props.onUpdateUserTable}
         />
      </Content>
    );
  } else {
    return (
      <Content>
        <Form>
          <Item>
            <Input
            placeholder="Enter Viewsite Name..."
            onChangeText={(viewsiteName) => props.onChange(viewsiteName)} />
          </Item>

          <Button
          block
          onPress={props.onSubmit}>
            <Text>Get Viewsite</Text>
          </Button>
        </Form>
      </Content>
    );
  }
}

/*
 * Drawer Layout JSX view
 */
var DrawerLayoutJSX = function() {
  return (
    <Drawer
    ref={(ref) => {this.drawer = ref;}}
    content={<NavigationView
      viewsite={this.state.viewsite}
      viewpages={this.state.viewsite.viewpages}
      closeDrawer={this.closeDrawer.bind(this)} />}
    onClose={() => this.closeDrawer()}>
      <Header>
        <Left>
          <Button transparent onPress={() => this.openDrawer()}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>
            {this.state.viewsiteName ? this.state.viewsiteName : "Cadre"}
          </Title>
        </Body>

        <Right />
      </Header>

      <Content
      style={styles.contentContainer}>
        <NavigationContent
        viewsiteName={this.state.viewsiteName}
        viewsite={this.state.viewsite}
        viewpages={this.state.viewsite.viewpages}
        userDatabase={this.state.userDatabase}
        userForms={this.state.userForms}
        onUpdateUserTable={this.handleUpdateUserTable}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
      </Content>
    </Drawer>
  );
}

// Export the Drawer Layout JSX view
export default DrawerLayoutJSX;
