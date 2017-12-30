// Import required modules
import React from 'react';

// Import requred components
import ViewpageJSX from './Viewpage.js';

class Viewpage extends React.Component {
  constructor(props) {
    // Call parent constructor
    super(props);

    // User Database Methods
    this.handleRequestUserDatabase = this.handleRequestUserDatabase.bind(this);

    // Set initial state
    this.state = {
      viewpage: {}
    };
  }

  handleRequestUserDatabase(viewsiteId) {
    this.props.onRequestUserDatabase(viewsiteId);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.viewpageId
      && this.props.viewpages
      && this.props.viewpages.length >= 1) {
      let viewpageId = nextProps.match.params.viewpageId;
      let viewpages = this.props.viewpages;
      for(let viewpage of viewpages) {
        if(viewpageId == viewpage._id) {
          this.setState({
            viewpage: viewpage
          });
        }
      }
    }
  }

  componentDidMount() {
    if(this.props.match.params.viewpageId
      && this.props.viewpages
      && this.props.viewpages.length >= 1) {
      let viewpageId = this.props.match.params.viewpageId;
      let viewpages = this.props.viewpages;
      for(let viewpage of viewpages) {
        if(viewpageId == viewpage._id) {
          this.setState({
            viewpage: viewpage
          });
        }
      }
    }
  }

  render() {
    return(ViewpageJSX.call(this));
  }
}

export default Viewpage;
